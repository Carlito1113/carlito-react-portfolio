import React from 'react';

class Carousel extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                items: [
                    {
                        id: 0,
                        title: 'Wine&Dines',
                        subTitle: 'Recipe generator & wine pairing app',
                        imgSrc: wineanddines,
                        link: 'https://andrewrb22.github.io/-.theFederationOfCoders-/',
                        selected: false
                    },
                    {
                        id: 1,
                        title: 'Audiophyle',
                        subTitle: 'Application for music lovers',
                        imgSrc: audiophyle,
                        link: 'https://audiophyle-music-platform.herokuapp.com/',
                        selected: false
                    },
                    {
                        id: 2,
                        title: '',
                        subTitle: '',
                        imgSrc: ,
                        link: '',
                        selected: false
                    },
                ]
            }
        }

        render() {
            return(
                <p>Carousel Works!</p>
            );
        }

}

export default Carousel;