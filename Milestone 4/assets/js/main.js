/* 
Milestone 4●Ricerca utenti:scrivendo qualcosa nell’input a sinistra,
vengono visualizzati solo icontatti il cui nome contiene le lettere inserite
(es, Marco, Matteo Martina -> Scrivo“mar” rimangono solo Marco e Martina)
*/
let whatsapp = new Vue({
            el: "#root",
            data: {
                counter: 0,
                myMessages: '',
                contactElement: '',
                contacts: [{
                        name: 'Michele',
                        avatar: '_1',
                        visible: true,
                        messages: [{
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 16:15:22',
                                text: 'Tutto fatto!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Fabio',
                        avatar: '_2',
                        visible: true,
                        messages: [{
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'sent'
                            },
                            {
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received'
                            },
                            {
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: '_3',
                        visible: true,
                        messages: [{
                                date: '28/03/2020 10:10:40',
                                text: 'La Marianna va in campagna',
                                status: 'received'
                            },
                            {
                                date: '28/03/2020 10:20:10',
                                text: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent'
                            },
                            {
                                date: '28/03/2020 16:15:22',
                                text: 'Ah scusa!',
                                status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Luisa',
                        avatar: '_4',
                        visible: true,
                        messages: [{
                                date: '10/01/2020 15:30:55',
                                text: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent'
                            },
                            {
                                date: '10/01/2020 15:50:00',
                                text: 'Si, ma preferirei andare al cinema',
                                status: 'received'
                            }
                        ],
                    },
                ]
            },
            methods: {
                //selezione chat in base all'utente
                selectUser(index) {
                    return this.counter = index
                },
                //funzione per data attuale
                actualTime: function () {
                    var d = new Date();
                    var day = d.getDate();
                    var month = d.getMonth();
                    var year = d.getFullYear();
                    var hour = d.getHours();
                    var minutes = d.getMinutes();
                    var seconds = d.getSeconds()
                    var fullDate = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
                    return fullDate;
                },
                //invio del messaggio da input con inserimento tramite enter
                addMessage(counter) {
                    this.contacts[counter].messages.push({
                        date: this.actualTime(),
                        text: this.myMessages,
                        status: 'sent',
                    }, );
                    this.myMessages = "";
                    setTimeout(() => {
                        this.contacts[counter].messages.push({
                            date: this.actualTime(),
                            text: "Ok!",
                            status: 'received',
                        }, );
                    }, 1000)

                },
                //funzione per filtrare
                searchUser() {
                    this.contacts.forEach(element => {
                        if (element.name.toLowerCase().includes(this.contactElement.toLowerCase())) {
                            element.visible = true;
                        } else {
                            element.visible = false;
                        }
                    })
                },

        }
    ,

})