import styles from "../styles/components/patientBanner.module.scss";

interface PatientBannerProps {
  participantName: string;
  nhsNumber: string;
}

const PatientBanner: React.FC<PatientBannerProps> = ({
  participantName,
  nhsNumber,
}) => {
  return (
    <div
      className={`${styles["app-mini-profile-header"]} nhsuk-u-margin-bottom-7`}
    >
      <dl>
        <dt>Participant:</dt>
        <dd>{participantName}</dd>
      </dl>
      <dl>
        <dt>NHS number:</dt>
        <dd>{nhsNumber}</dd>
      </dl>
    </div>
  );
};

export default PatientBanner;
