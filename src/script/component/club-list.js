import "./club-item.js";

class ClubList extends HTMLElement {

    set clubs(club) {
        this._clubs = club;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this.appendChild(clubItemElement);
        })
    }

    renderError() {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define('club-list', ClubList);