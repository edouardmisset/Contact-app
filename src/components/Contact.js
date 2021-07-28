import './Contact.css';

const firstName = 'John';
const lastName = 'Doe';
const fullName = `${firstName} ${lastName}`;
const avatarUrl = `https://eu.ui-avatars.com/api/?name=${firstName}+${lastName}&background=random&rounded=true`;
const online = true;

function Contact() {
  return (
    <div className='contact'>
      <img src={avatarUrl} alt='avatar' className='avatar' />
      <div className='text'>
        <h4 className='name'>{fullName} </h4>
        <div className='status'>
          <span className={online ? 'status-online' : 'status-offline'}></span>
          <p className='status-text'> {online ? 'Online' : 'Offline'} </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
