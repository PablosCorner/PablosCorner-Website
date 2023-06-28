initNavBar();
initFooter();
initSM64Archives();

function initNavBar()
{
	let navBar = document.getElementById("nav-bar");

	// Home
	let navHome = document.createElement("div");
	navHome.id = "nav-home";
	let navHomeEl = document.createElement("div");
	navHomeEl.classList.add("nav-element");
	let navHomeLink = document.createElement("a");
	navHomeLink.href = websiteURL;
	navHomeLink.innerText = homeText;
	navHomeEl.appendChild(navHomeLink);
	navHome.appendChild(navHomeEl);
	navBar.appendChild(navHome);

	// Links container
	let navLinks = document.createElement("div");
	navLinks.id = "nav-links";

	// Hamburger menu button
	let navHamburger = document.createElement("a");
	navHamburger.id = "nav-hamburger";
	let navHamburgerIcon = document.createElement("i");
	navHamburgerIcon.classList.add("fa");
	navHamburgerIcon.classList.add("fa-bars");
	navHamburger.appendChild(navHamburgerIcon);
	navLinks.appendChild(navHamburger);

	// Links list
	let navLinksList = document.createElement("div");
	navLinksList.id = "nav-links-list";
	for (let i = 0; i < navBarContent.length; i++) {
		let navElement = document.createElement("div");
		navElement.classList.add("nav-element");

		// Main link
		let navName = document.createElement("a");
		navName.innerText = navBarContent[i][0];
		setNavLinkClass(navName);
		if (navBarContent[i][1].length > 0) {
			navName.href = navBarContent[i][1];
		}
		navElement.appendChild(navName);

		// Dropdown menu
		if (navBarContent[i][2].length > 0) {
			let navDropDown = document.createElement("div");
			navDropDown.classList.add("nav-dropdown");
			for (let j = 0; j < navBarContent[i][2].length; j++) {
				// Link
				let navSubName = document.createElement("a");
				navSubName.innerText = navBarContent[i][2][j][0];
				setNavLinkClass(navSubName);
				if (navBarContent[i][2][j][1].length > 0) {
					navSubName.href = navBarContent[i][2][j][1];
				}
				navDropDown.appendChild(navSubName);
			}
			navElement.appendChild(navDropDown);
		}
		navLinksList.appendChild(navElement);
	}

	navLinks.appendChild(navLinksList);
	navBar.appendChild(navLinks);
}

function setNavLinkClass(el)
{
	switch (el.innerText) {
		case "Discord":
			el.classList.add("discord");
			break;
			
		case "YouTube":
			el.classList.add("youtube");
			break;
			
		case "Mastodon":
			el.classList.add("mastodon");
			break;
			
		case "Odysee":
			el.classList.add("odysee");
			break;
			
		case "Twitch":
			el.classList.add("twitch");
			break;
			
		case "Bandcamp":
			el.classList.add("bandcamp");
			break;
	}
}

function initFooter()
{
	let footer = document.createElement("footer");
	footer.id = "footer";
	let footerText = document.createElement("p");
	footerText.classList.add("copyright");
	footerText.innerHTML = "Copyright &copy; " + (new Date().getFullYear()).toString() + " - " + copyright;
	footer.appendChild(footerText);
	
	document.body.appendChild(footer);
}

function initSM64Archives()
{
	let container = document.getElementById("sm64-archive-cards");
	if (container != null) {
		for (let i = 0; i < sm64ArchivesContent.length; i++) {
			let card = document.createElement("div");
			card.classList.add("card");
			
			let contents = document.createElement("div");
			contents.classList.add("card-contents");

			let header = document.createElement("h1");
			header.innerText = "SM64 Editor (v" + sm64ArchivesContent[i][0] + ")";

			let date = document.createElement("p");
			date.classList.add("center");
			date.innerText = "Released " + sm64ArchivesContent[i][1];
			
			let changeLog = document.createElement("div");
			changeLog.classList.add("codebox");
			
			let changelogHeader = document.createElement("p");
			changelogHeader.innerText = "Changes in " + sm64ArchivesContent[i][0] + ":";
			
			let changelogList = document.createElement("ul");
			for (let j = 0; j < sm64ArchivesContent[i][2].length; j++) {
				if (Array.isArray(sm64ArchivesContent[i][2][j])) {
					let sectionHeader = document.createElement("li");
					sectionHeader.innerText = sm64ArchivesContent[i][2][j][0];
					changelogList.appendChild(sectionHeader);
					
					let sectionList = document.createElement("ul");
					for (let k = 0; k < sm64ArchivesContent[i][2][j][1].length; k++) {
						let item = document.createElement("li");
						item.innerText = sm64ArchivesContent[i][2][j][1][k];
						sectionList.appendChild(item);
					}
					changelogList.appendChild(sectionList);
				} else {
					let item = document.createElement("li");
					item.innerText = sm64ArchivesContent[i][2][j];
					changelogList.appendChild(item);
				}
			}
			
			changeLog.appendChild(changelogHeader);
			changeLog.appendChild(changelogList);

			contents.appendChild(header);
			contents.appendChild(date);
			contents.appendChild(changeLog);

			let download = document.createElement("div");
			download.classList.add("dl-btn");

			let downloadLink = document.createElement("a");
			downloadLink.href = sm64ArchiveFolder + "/" + sm64ArchivePrefix + sm64ArchivesContent[i][0] + "." + sm64ArchiveExt;
			downloadLink.innerHTML = "<i class=\"fas fa-cloud-download-alt\"></i> Download</a>";
			
			download.appendChild(downloadLink);

			card.appendChild(contents);
			card.appendChild(download);

			container.appendChild(card);
		}
	}
}
