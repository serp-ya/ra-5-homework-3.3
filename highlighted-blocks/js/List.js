'use strict';

class List extends React.Component {

    constructor(props) {
        super(props);

        this.components = this.props.list.map(item => {
            const { views } = item;
            
            switch (item.type) {
                case 'video': {
                    const PopularityVideo = this.componentsSwitcher(Video)(views);
                    return (
                        <PopularityVideo {...item} />
                    );
                }
                
                case 'article': {
                    const PopularityArticle = this.componentsSwitcher(Article)(views);
                    return (
                        <PopularityArticle {...item} />
                    );
                }
            }
        });
    }
    
    componentsSwitcher (Component) {
        return (views) => popularitySwitcher(Component, New, Popular, views);
    }

    render() {
        return this.components;
    };
}