class MessageItem extends HTMLElement {
    connectedCallback () {
        let componentHtml = '<i class="close icon" id="' + this.getAttribute('elementId') + '-close"></i>' +
            '<div class="header">' + this.getAttribute('message') + '</div>';   
        let componentStyle = 'display: flex;' + 
        'justify-content: center;';

        this.setAttribute('class','ui ' + this.getAttribute('type') + ' message');
        this.setAttribute('id', this.getAttribute('elementId'));
        this.setAttribute('style', componentStyle);
        
        this.innerHTML = componentHtml;
    };
}

customElements.define('message-item', MessageItem);