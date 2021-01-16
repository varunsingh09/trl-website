import React, { useEffect } from 'react';
import AdSense from 'react-adsense';

const FixedHorizontalAds = ({ ...props }) => {

    // useEffect(() => {
    //     (window.adsbygoogle = window.adsbygoogle || []).push({});
    // })

    // return <ins className="adsbygoogle"
    //     style={{ display: "block" }}
    //     data-ad-format="fluid"
    //     data-ad-layout-key="-gv+4h+3f-b1+76"
    //     data-ad-client="ca-pub-9146473421633718"
    //     data-ad-slot="4457642924"></ins>

    return <AdSense.Google
        client={props.client}
        slot={props.slot}
        style={{ display: 'block', height: '100px' }}
        format={props.format}
        responsive={props.responsive}
        layoutKey={props.layoutKey}
    />


};

export default FixedHorizontalAds