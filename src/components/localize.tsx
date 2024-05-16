import type { i18n } from "i18next";
import { Trans, withTranslation } from "react-i18next";

type TLocalizeProps = {
  i18n_default_text: string;
  values?: object;
  components?: JSX.Element[];
  options?: Record<string, unknown>;
  shouldUnescape?: boolean;
  i18n?: i18n;
};

function Localize({
  i18n,
  i18n_default_text,
  values,
  components,
  options,
  shouldUnescape,
}: TLocalizeProps) {
  return (
    <Trans
      defaults={i18n_default_text}
      i18n={i18n}
      values={values}
      components={components}
      tOptions={options}
      shouldUnescape={shouldUnescape}
    />
  );
}

export default withTranslation()(Localize);
