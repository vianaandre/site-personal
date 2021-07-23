import { render } from 'datocms-structured-text-to-plain-text';

const datoStructureText: any = (text: any) => {
  const renderText = render(text)

  return renderText;
}

export default datoStructureText;
