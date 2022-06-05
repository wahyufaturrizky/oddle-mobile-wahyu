import {ButtonContextual} from './Button.Contextual';
import {ButtonCounter} from './Button.Counter';
import ButtonFloating from './Button.Floating';
import {ButtonGroup} from './Button.Group';
import {ButtonLink} from './Button.Link';
import {ButtonNormal} from './Button.Normal';
import {ButtonRounded} from './Button.Rounded';
import {ButtonSocialMedia} from './Button.SocialMedia';

const Button = (props) => {
  return props.children;
};

Button.Group = ButtonGroup;
Button.Contextual = ButtonContextual;
Button.Counter = ButtonCounter;
Button.Link = ButtonLink;
Button.Normal = ButtonNormal;
Button.Rounded = ButtonRounded;
Button.SocialMedia = ButtonSocialMedia;
Button.Floating = ButtonFloating;

export default Button;
