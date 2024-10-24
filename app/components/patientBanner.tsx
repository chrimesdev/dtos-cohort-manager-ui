import { formatNhsNumber } from "@/app/lib/utils";
import styles from "@/app/styles/components/patientBanner.module.scss";

interface PatientBannerProps {
  participantName: string;
  nhsNumber: string;
}

export default function PatientBanner({
  participantName,
  nhsNumber,
}: PatientBannerProps) {
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
        <dd>{formatNhsNumber(nhsNumber)}</dd>
      </dl>
    </div>
  );
}
