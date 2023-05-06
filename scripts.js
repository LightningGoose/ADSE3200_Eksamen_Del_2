function adjustSpacerHeight() {
    var listContainer = document.getElementById('list-container');
    var list = document.getElementById('list');
    var spacer = document.querySelector('.spacer');

    spacer.style.height = listContainer.offsetHeight - list.offsetHeight + 'px';
  }

  window.addEventListener('load', adjustSpacerHeight);
  window.addEventListener('resize', adjustSpacerHeight);


function showList(category) {
    const listContainer = document.getElementById("list-container");
    const listElement = document.getElementById("list");
    const listItems = {
        community: [
            "activities",
            "artists",
            "car Pools",
            "childcare",
            "classes",
            "events",
            "general",
            "groups",
            "local News",
            "lost+Found",
            "missed",
            "connections",
            "musicians",
            "pets",
            "politics",
            "pants & Raves",
            "volunteers"
        ],
        housing: [
            "flats/housing",
            "holiday rentals",
            "housing/real estate for sale",
            "housing swap",
            "housing wanted",
            "office / commercial",
            "parking / storage",
            "rooms/shared",
            "rooms wanted",
            "sub-lets / temporary"
        ],
        jobs: [
            "accounting+finance",
            "admin / office",
            "arch / engineering",
            "art / media / design",
            "biotech / science",
            "business / mgmt",
            "customer services",
            "education",
            "etc / misc",
            "food / bev / hosp",
            "general labour",
            "government",
            "housing/real estate",
            "human resources",
            "legal / paralegal",
            "manufacturing",
            "marketing / pr / ad",
            "medical / health",
            "non-profit sector",
            "retail / wholesale",
            "sales / biz dev",
            "salon / spa / fitness",
            "security",
            "skilled trade / craft",
            "software/qa/dba",
            "systems / network",
            "technical support",
            "transport",
            "tv / film / video",
            "web/info design",
            "writing / editing"
        ],
        services: [
            "beauty",
            "cars/automotive",
            "cell/mobile",
            "computer",
            "creative",
            "cycle",
            "event",
            "farm+garden",
            "financial",
            "health/well",
            "household",
            "housing/real estate",
            "labour/move",
            "legal",
            "lessons",
            "marine",
            "pet",
            "skilled trade",
            "sm biz ads",
            "travel/hol",
            "write/ed/tran"
        ],
        forsale: [
            "antiques",
            "appliances",
            "arts+crafts",
            "atv/utv/sno",
            "auto parts",
            "aviation",
            "baby+kid",
            "barter",
            "beauty+health",
            "bike parts",
            "bikes",
            "boat parts",
            "boats",
            "books",
            "business",
            "caravn",
            "cars+vans",
            "cds/dvd/vhs",
            "clothes+acc",
            "collectibles",
            "computer parts",
            "computers",
            "electronics",
            "farm+garden",
            "free",
            "furniture",
            "garage sale",
            "general",
            "heavy equip",
            "household",
            "jewellery",
            "materials",
            "mobile phones",
            "motorcycle parts",
            "motorcycles",
            "music instr",
            "photo+video",
            "sporting",
            "tickets",
            "tools",
            "toys+games",
            "trailers",
            "video gaming",
            "wanted",
            "wheels+tires"
        ],
        forums: [
            "announcements",
            "general",
            "help+support",
            "off-topic",
            "personals",
            "pets",
            "politics",
            "rants & Raves",
            "rideshare",
            "volunteers"
        ]
    };

    // Clear previous list
    while (listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    // Create new list based on category
    const items = listItems[category];
    const columnCount = 3;
    const itemsPerColumn = Math.ceil(items.length / columnCount);

    // Create columns
    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement("ul");
        for (let j = i * itemsPerColumn; j < (i + 1) * itemsPerColumn && j < items.length; j++) {
            const listItem = document.createElement("li");
            listItem.textContent = items[j];
            column.appendChild(listItem);
        }
        listElement.appendChild(column);
    }

    // Show the list container
    listContainer.style.display = "block";
}