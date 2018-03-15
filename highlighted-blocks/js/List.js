'use strict';

const List = props => {
    return props.list.map(item => {
        const { views } = item;
        console.log('views', views);
        switch (item.type) {
            case 'video':
                const PopularityVideo = popularitySwitcher(Video, New, Popular, views);
                return (
                    <PopularityVideo {...item} />
                );

            case 'article':
                const PopularityArticle = popularitySwitcher(Article, New, Popular, views);
                return (
                    <PopularityArticle {...item} />
                );
        }
    });
};