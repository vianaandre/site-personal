import { render } from 'datocms-structured-text-to-html-string';

const datoStructureTextHTML: any = (text: any) => {

  const renderTxt = render(text)

  return renderTxt

}

export default datoStructureTextHTML;
