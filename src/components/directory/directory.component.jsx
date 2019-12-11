import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';


class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
          sections: [
            {
              title: "wheels",
              imageUrl: "https://bit.ly/2Ynkc2x",
              id: 1
            },
            {
              title: "drivetrain//brakes",
              imageUrl: "https://bit.ly/2rb94dc",
              id: 2
            },
            {
              title: "cockpit//saddles",
              imageUrl: "https://bit.ly/2LqfR9O",
              id: 3
            },
            {
              title: "frames//forks",
              imageUrl: "https://bit.ly/2DT5DKU",
              size: "large",
              id: 4
            },
            {
              title: "accessories",
              imageUrl: "https://bit.ly/388ybxM",
              size: "large",
              id: 5
            }
          ]
        };
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}


export default Directory;