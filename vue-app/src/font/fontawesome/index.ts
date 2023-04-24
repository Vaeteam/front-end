// import library
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import icon
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

// add icon to library to use in this project
library.add(faUsers);
library.add(faEnvelope);
library.add(faLock);
library.add(faGoogle);
library.add(faFacebookF);


export default FontAwesomeIcon;