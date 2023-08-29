// 检查svg代码中是否有class以及与颜色相关的fill、stroke等属性，如有，必须连带属性一起删除。
// 确保标签中有fill="currentColor"，否则图标的颜色将不能改变。
// 确保标签中width和height属性的值为1em，否则图标的大小将不能改变。
import Icon from "@ant-design/icons";

const SunSvg = () => (
  // 这里粘贴“太阳”图标的SVG代码
  <svg
    t="1693295098936"
    viewBox="0 0 1025 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2720"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M512.909414 282.827709q47.28952 0 89.122558 18.188277t72.753108 49.108348 49.108348 72.753108 18.188277 89.122558q0 48.198934-18.188277 90.031972t-49.108348 72.753108-72.753108 49.108348-89.122558 18.188277q-48.198934 0-90.031972-18.188277t-72.753108-49.108348-49.108348-72.753108-18.188277-90.031972q0-47.28952 18.188277-89.122558t49.108348-72.753108 72.753108-49.108348 90.031972-18.188277zM967.616341 454.706927q23.64476 0 40.468917 16.824156t16.824156 40.468917-16.824156 40.468917-40.468917 16.824156l-107.310835 0q-7.275311 43.651865-24.099467 82.301954t-42.287744 72.298401l80.937833 70.024867q16.369449 16.369449 16.369449 40.01421t-16.369449 40.01421q-16.369449 17.278863-40.01421 17.278863t-40.01421-17.278863l-70.934281-80.028419q-68.206039 51.83659-154.600355 65.477798l0 108.220249q0 23.64476-16.369449 40.01421t-40.01421 16.369449-40.468917-16.369449-16.824156-40.01421l0-108.220249q-86.394316-13.641208-154.600355-65.477798l-70.024867 80.028419q-17.278863 17.278863-40.468917 17.278863t-40.468917-17.278863q-16.369449-16.369449-16.369449-40.01421t16.369449-40.01421l80.937833-70.024867q-50.927176-68.206039-66.387211-154.600355l-107.310835 0q-23.64476 0-40.468917-16.824156t-16.824156-40.468917 16.824156-40.468917 40.468917-16.824156l107.310835 0q15.460036-86.394316 66.387211-154.600355l-80.937833-70.024867q-16.369449-16.369449-16.369449-40.01421t16.369449-40.01421q17.278863-17.278863 40.468917-17.278863t40.468917 17.278863l70.024867 80.937833q33.648313-25.463588 72.298401-42.287744t82.301954-24.099467l0-108.220249q0-23.64476 16.824156-40.01421t40.468917-16.369449 40.01421 16.369449 16.369449 40.01421l0 108.220249q43.651865 7.275311 82.301954 24.099467t72.298401 42.287744l70.934281-80.937833q16.369449-17.278863 40.01421-17.278863t40.01421 17.278863q16.369449 16.369449 16.369449 40.01421t-16.369449 40.01421l-80.937833 70.024867q25.463588 33.648313 42.287744 72.298401t24.099467 82.301954l107.310835 0zM512.909414 795.737123q58.202487 0 110.039076-22.280639t90.486679-60.930728 60.930728-90.031972 22.280639-110.493783q0-58.202487-22.280639-110.039076t-60.930728-90.486679-90.486679-60.930728-110.039076-22.280639q-59.111901 0-110.94849 22.280639t-90.031972 60.930728-60.476021 90.486679-22.280639 110.039076q0 59.111901 22.280639 110.493783t60.476021 90.031972 90.031972 60.930728 110.94849 22.280639z"
      p-id="2721"
    ></path>
  </svg>
);

const MoonSvg = () => (
  // 这里粘贴“月亮”图标的SVG代码
  <svg
    t="1693295039151"
    viewBox="0 0 1026 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1561"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M716.8 2.048q67.584 27.648 124.416 74.24t97.28 106.496 63.488 131.072 23.04 148.992q0 68.608-17.92 132.096t-50.176 118.784-77.824 100.864-100.864 77.824-119.296 50.176-132.608 17.92q-77.824 0-148.992-22.528t-131.072-63.488-106.496-97.792-74.24-124.416q64.512 73.728 153.6 115.712t194.56 41.984q95.232 0 179.2-36.352t146.432-98.816 98.816-146.432 36.352-179.2q0-104.448-42.496-194.048t-115.2-153.088zM220.16 289.792l-89.088-86.016 122.88-18.432 54.272-110.592 55.296 110.592 122.88 18.432-89.088 86.016 21.504 122.88-110.592-58.368-109.568 58.368z"
      p-id="1562"
    ></path>
  </svg>
);

const ThemeSvg = () => (
  // 这里粘贴“主题色”图标的SVG代码
  <svg
    t="1693295113829"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="3729"
    width="1em"
    height="1em"
    fill="currentColor"
  >
    <path
      d="M313.991837 914.285714c-20.37551 0-40.228571-6.269388-56.946939-18.808163-30.302041-21.942857-44.930612-58.514286-38.661225-95.085714l24.032654-141.061225c3.134694-18.285714-3.134694-36.571429-16.195919-49.110204L123.297959 509.910204c-26.644898-26.122449-36.04898-64.261224-24.555102-99.787755 11.493878-35.526531 41.795918-61.126531 78.889796-66.35102l141.583674-20.375511c18.285714-2.612245 33.959184-14.106122 41.795918-30.30204l63.216326-128.522449C440.946939 130.612245 474.383673 109.714286 512 109.714286s71.053061 20.897959 87.24898 54.334694L662.987755 292.571429c8.359184 16.195918 24.032653 27.689796 41.795918 30.30204l141.583674 20.375511c37.093878 5.22449 67.395918 30.82449 78.889796 66.35102 11.493878 35.526531 2.089796 73.665306-24.555102 99.787755l-102.4 99.787755c-13.061224 12.538776-19.330612 31.346939-16.195919 49.110204l24.032654 141.061225c6.269388 37.093878-8.359184 73.142857-38.661225 95.085714-30.302041 21.942857-69.485714 24.555102-102.4 7.314286L538.122449 836.440816c-16.195918-8.359184-35.526531-8.359184-51.722449 0l-126.955102 66.87347c-14.628571 7.314286-30.302041 10.971429-45.453061 10.971428z m162.481632-96.653061z"
      fill="#F2CB51"
      p-id="3730"
    ></path>
  </svg>
);

export const SunOutlined = (props) => <Icon component={SunSvg} {...props} />;
export const MoonOutlined = (props) => <Icon component={MoonSvg} {...props} />;
export const ThemeOutlined = (props) => <Icon component={ThemeSvg} {...props} />;