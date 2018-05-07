'use strict';
const WrappedVideo = popularitySwitcher(Video);
const WrappedArticle = popularitySwitcher(Article);

const List = (props) => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video': {
                return (
                    <WrappedVideo {...item} />
                );
            }
            
            case 'article': {
                return (
                    <WrappedArticle {...item} />
                );
            }
        }
    });
}