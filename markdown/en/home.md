# Personalization proof of concept

**What is this?** This proof of concept demonstrates how anonymous data collected through normal web analytics can be used to personalize the user experience. Depending on which province a user arrives from, the default language setting in their web browser, and the time of year in which they arrive, they will be served a list of links to benefits that are most commonly visited by people like them. The model to deliver these personalized results is trained on two years' worth of previous visitors to these benefit pages.

**Why are we doing it?** Using anonymous and, eventually, authenticated data about how people navigate Service Canada pages allows us to anonymously predict the pages and services likely to be of interest to clients. This demonstration is an experiment to understand how we can train a personalization model and use it to provide predictive responses to new website visitors.

**What should a user expect to see?** Upon arriving at the website, a user will see a list of related links that the model has prioritized for them. To explore the personalizer, users can then choose to change their criteria using the menus provided, and then refresh the list of links.

- This demonstration does not collect any personal information. 
- It also does not collect or store any of the changes you make to the criteria in the menus.
- Anonymous web analytics, including the default language of your browser, the date and time of your visit and your IP address are collected from this page.
- Read the full privacy policy.

## How does it work?

**What to do to make this personalizer/customizer work?** Upon your arrival on this page, the personalizer took your analytics information and performed an assessment of what links you might be interested in visiting next based on the province of your IP, the current month, and the page language. To see how these links would be different if you were a member of a different group of visitors, change the settings in the menus below.