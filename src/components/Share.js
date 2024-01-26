const Share = () => {

    function fixedEncodeURIComponent(str) {
        return encodeURIComponent(str).replace(/[!'()]/g, escape).replace(/\*/g, "%2A");
    }


    let url = fixedEncodeURIComponent("https://superlative-bunny-c61262.netlify.app/share");
    console.log(url);
    return (
        <div>
            <h2>Share Social</h2>

            <a target='_blank' className='c-black' rel="noreferrer" href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                Share on Linkedin
            </a>

        </div>
    );
};

export default Share;

