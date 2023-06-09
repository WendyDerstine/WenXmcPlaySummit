import { faAddressBook, faCreditCard, faList, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { DMeUser } from '../../models/ordercloud/DUser';

type UserProfileContentProps = {
  user: DMeUser;
};

const UserProfile = ({ user }: UserProfileContentProps): JSX.Element => {
  const greeting =
    user?.FirstName || user?.LastName ? (
      <>
        Greetings,{' '}
        <span>
          {!!user.FirstName ? user.FirstName : ''} {!!user.LastName ? user.LastName : ''}
        </span>
      </>
    ) : (
      <>Greetings!</>
    );

  return (
    <section className="user-profile section shop-container">
      <h1>{greeting}</h1>
      <p className="user-profile-type">
        {/* TODO: Get user type dynamically */}
        User type: <span>Regular client</span>
      </p>
      <ul className="user-profile-grid">
        <li className="user-profile-card">
          <Link href="/account/address-book">
            <FontAwesomeIcon icon={faAddressBook} className="text-blue" />
            <p>Address book</p>
          </Link>
        </li>
        <li className="user-profile-card">
          <Link href="/account/payment-methods">
            <FontAwesomeIcon icon={faCreditCard} className="text-yellow" />
            <p>Payment methods</p>
          </Link>
        </li>
        <li className="user-profile-card">
          <Link href="/account/orders">
            <FontAwesomeIcon icon={faReceipt} className="text-orange" />
            <p>Order history</p>
          </Link>
        </li>
        <li className="user-profile-card">
          <Link href="#">
            <FontAwesomeIcon icon={faList} className="text-pink" />
            <p>Saved lists</p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default UserProfile;
