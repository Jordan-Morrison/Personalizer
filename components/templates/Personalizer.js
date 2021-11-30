import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { Oval } from 'svg-loaders-react'
import { getRecommendations } from '../helpers/api'
import CustomList from "../molecules/CustomList";
import DropDown from '../molecules/DropDown';
import RadioButtons from '../molecules/RadioButtons';
import Card from "../organisms/Card";
import AdditionalLink from '../atoms/AdditionalLink';
import Provinces from '../../data/provinces.json';
import Months from '../../data/months.json';
import styles from '../../styles/Personalizer.module.css';

export default function Personalizer(props) {

    const [province, setProvince] = useState(props.t.locale === "en" ? "ontario" : "quebec");
    const [month, setMonth] = useState(moment().format("MMMM"));
    const [language, setLanguage] = useState(props.t.language);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [errorFlag, setErrorFlag] = useState(false);

    useEffect(() => {
        getResults();
    },[province, month, language])

    const provinceName = Provinces.find(element => element.short === province).name[props.t.locale];

    async function getResults() {
        setLoading(true);
        try {
            setResults(await getRecommendations(province, month, language));
        } catch (error) {
            setErrorFlag(true);
            console.log(error);
        }
        setLoading(false);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>{props.t.meta.title}</title>
                <meta name="description" content={props.t.meta.description} />
            </Head>
            <ReactMarkdown children={props.markdown} className={styles.markdown} components={{
                ul: CustomList
            }}/>
            <div className={styles.form}>
                <DropDown t={props.t} state={{
                    get: province,
                    set: setProvince
                }} label={props.t.provinceSelectLabel} items={Provinces} id="provinces"/>
                <DropDown t={props.t} state={{
                    get: month,
                    set: setMonth
                }} label={props.t.monthSelectLabel} items={Months} id="months"/>
                <RadioButtons t={props.t} state={{
                    get: language,
                    set: setLanguage
                }} label={props.t.languageSelectLabel} id="language" items={[
                    {
                        "name": {
                            "en": "English",
                            "fr": "Anglais"
                        },
                        "short": "English"
                    },
                    {
                        "name": {
                            "en": "French",
                            "fr": "Français"
                        },
                        "short": "French"
                    }
                ]}/>
            </div>
            {errorFlag &&
                <p className={styles.errorMessage}>{props.t.errorMessage}</p>
            }
            {loading &&
                <div className={styles.loader}>
                    <Oval/>
                </div>
            }
            {results &&
                <React.Fragment>
                    <h3>{props.t.resultsTitle} {provinceName}, {month}, {language}</h3>
                    <div className={styles.searchResults}>
                        {results.rankings.slice(0, 4).map((result) =>
                            <Card key={result.id} t={props.t} eventId={result.id === results.recommendation ? results.eventId : null} url={result.id}/>
                        )}
                    </div>
                    <h5>{props.t.moreResultsTitle} {provinceName}, {month}, {language}</h5>
                    <ul>
                        {results.rankings.slice(4, results.rankings.length).map((result) =>
                            <li key={result.id}>
                                <AdditionalLink t={props.t} url={result.id}/>
                            </li>
                        )}
                    </ul>
                </React.Fragment>
            }
        </div>
    )
}