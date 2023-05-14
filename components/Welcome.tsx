import { FormattedMessage } from "react-intl";

export function Welcome() {
  return (
    <section>
      <h1><FormattedMessage id="hello" /></h1>
      <span>
        <FormattedMessage id="welcome" />
      </span>
    </section>
  );
}
