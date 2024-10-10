import { FormattedMessage } from "react-intl";

export function Welcome() {
  return (
    <section>
      <h1 className="text-3xl"><FormattedMessage id="hello" /></h1>
      <span>
        <FormattedMessage id="welcome" />
      </span>
    </section>
  );
}
