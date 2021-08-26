import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link, useRouteMatch } from 'react-router-dom';

function MyInfo(props: any) {
  let { path, url } = useRouteMatch();
console.log(url);
console.log(path);
  return (
    <div>
      這是我的資訊<br/>
      <Link className={`text-2xl group flex rounded-md items-center w-full px-1 py-1 text-sm`}  to={`${url}/reset-password`}>
                                    <div className="mr-4 w-8">
                                        <i className={`bi bi-info-circle`}></i>
                                    </div>
                                </Link>
    </div>
  );
}

export default withTranslation('common')(MyInfo);
