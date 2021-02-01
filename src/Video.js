import React, {createRef, useState, useEffect} from 'react';

const Video = () => {
    const [showVideo, setShowVideo] = useState(false);

    const container = createRef();

    const videoObserver = new IntersectionObserver(onVideoIntersection, {
        rootMargin: '100px 0px',
        threshold: 0.25
    });

    useEffect(() => {
        if (window && 'IntersectionObserver' in window) {
            if (container && container.current) {
                videoObserver.observe(container.current);
            }
        } else {
            setShowVideo(true);
        }
    
    }, [container]);

    function onVideoIntersection(entries) {
        if (!entries || entries.length <= 0) {
            return;
        }

        if (entries[0].isIntersecting) {
            setShowVideo(true);
            videoObserver.disconnect();
        }
    }

    return (
        <div>
            <div style={{'display': 'block',
                          'height': '2000px',
                          'background': 'lightblue'}}>
                Psy Gangnam Style
            </div>

            <div ref={container}>
                { 
                    showVideo ? 
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/9bZkp7q19f0" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                    
                        </iframe>
                    : undefined
                }
            </div>
        </div>
    );
};

export default Video;