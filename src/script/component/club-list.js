import "./club-item.js";

class ClubList extends HTMLElement {

    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    set clubs(club) {
        this._clubs = club;
        this.render();
    }

    render() {
        this.shadowDom.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this.shadowDom.appendChild(clubItemElement);
        })
    }

    renderError() {
        this.shadowDom.innerHTML = `
        

        .placeholder {
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        `;
        this.shadowDom.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

}

customElements.define('club-list', ClubList);