import React from 'react';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections:
            [
                {
                  id: 1,
                  title: 'Hats',
                  routeName: 'hats',
                  items:[
                    {
                      id: 1,
                      name: 'Brown Brim',
                      imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                      price: 25
                    },
                    {
                      id: 2,
                      name: 'Blue Beanie',
                      imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                      price: 18
                    },
                    {
                      id: 3,
                      name: 'Brown Cowboy',
                      imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                      price: 35
                    },
                    {
                      id: 4,
                      name: 'Grey Brim',
                      imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                      price: 25
                    },
                    ]
                }
            ]
        }
    }
}{}