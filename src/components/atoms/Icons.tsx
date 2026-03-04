import logo from "../../assets/im2b-logo-branco.png";
import { Fingerprint } from "../animate-ui/icons/fingerprint";
import { Lightbulb } from "../animate-ui/icons/lightbulb";
import { StarIcon, type Star } from "../animate-ui/icons/star";
import { BrushIcon } from "../animate-ui/icons/brush";
import { PauseIcon } from "../animate-ui/icons/pause";
import {  ClapperboardIcon } from "../animate-ui/icons/clapperboard";
import { LayoutDashboard } from "../animate-ui/icons/layout-dashboard";

export const ICONS = {
    NAV_MAIN: logo,
    SIDEBAR_VIDEO: < ClapperboardIcon animateOnHover size={52} key="clapperboard" />,
    NAV_GALLERY:  <Lightbulb animateOnHover size={52} key="lightbulb" />,
    NAV_ABOUT: <Fingerprint animateOnHover size={52} key="fingerprint" />,
    NAV_STUFF: <StarIcon animateOnHover size={52} key="star" />,
    //NAV_EXTRAS: 'https://img.icons8.com/fluency-systems-filled/110/ffffff/sparkling.png',
    SIDEBAR_PHOTO: <PauseIcon animateOnHover size={52} key="pause" />,
    SIDEBAR_ART: <BrushIcon animateOnHover size={52} key="brush" />,
    SIDEBAR_DESIGN:<LayoutDashboard animateOnHover size={52} key="layout-dashboard" />,
    FOOTER_TOP: 'https://img.icons8.com/fluency-systems-filled/100/ffffff/up.png',
    FOOTER_ARROW: 'https://img.icons8.com/fluency-systems-filled/50/ffffff/arrow.png',
    SOCIAL_LINKEDIN: 'https://img.icons8.com/ios-filled/100/ffffff/linkedin.png',
    SOCIAL_GITHUB: 'https://img.icons8.com/ios-filled/100/ffffff/github.png',
    SOCIAL_TWITTER: 'https://img.icons8.com/ios-filled/100/ffffff/twitter-x.png',

};
