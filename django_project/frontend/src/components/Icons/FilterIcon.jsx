/**
 * GeoSight is UNICEF's geospatial web-based business intelligence platform.
 *
 * Contact : geosight-no-reply@unicef.org
 *
 * .. note:: This program is free software; you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published by
 *     the Free Software Foundation; either version 3 of the License, or
 *     (at your option) any later version.
 *
 * __author__ = 'irwan@kartoza.com'
 * __date__ = '31/07/2023'
 * __copyright__ = ('Copyright 2023, Unicef')
 */

import React from "react";

export default function FilterIcon({ active = false }) {
  if (active) {
    return <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
                xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.93968 0.399283C9.88706 0.280012 9.79962 0.178529 9.68827 0.107517C9.57692 0.0365045 9.44661 -0.000886797 9.31362 1.59694e-05H0.68505C0.552178 0.000264263 0.422236 0.0381684 0.310995 0.109128C0.199754 0.180087 0.111997 0.281051 0.0583744 0.399766C0.00475195 0.518481 -0.0124303 0.649842 0.00891307 0.777907C0.0302564 0.905972 0.0892078 1.02523 0.178612 1.12122L0.181554 1.12457L3.50208 4.58632C3.51913 4.6041 3.52859 4.62755 3.52856 4.65191V8.33005C3.52861 8.45136 3.56238 8.57038 3.62626 8.67442C3.69014 8.77846 3.78174 8.86362 3.89129 8.92082C4.00084 8.97802 4.12424 9.00511 4.24832 8.99921C4.3724 8.9933 4.49251 8.95463 4.59585 8.8873L6.16468 7.86615C6.25867 7.80492 6.33572 7.72198 6.389 7.62468C6.44229 7.52739 6.47015 7.41876 6.47011 7.30842V4.65191C6.47007 4.62755 6.47954 4.6041 6.49659 4.58632L9.82006 1.12122C9.91046 1.02569 9.97003 0.906261 9.9913 0.777858C10.0126 0.649455 9.99462 0.517776 9.93968 0.399283ZM9.38765 0.731527L6.06712 4.19376C5.94773 4.31778 5.88143 4.48169 5.8818 4.65191V7.30842C5.88185 7.32423 5.87789 7.33981 5.87028 7.35376C5.86267 7.36771 5.85163 7.3796 5.83817 7.38837L4.26934 8.40952C4.25458 8.41913 4.23744 8.42466 4.21972 8.42551C4.20201 8.42635 4.18439 8.4225 4.16875 8.41434C4.1531 8.40619 4.14001 8.39404 4.13088 8.3792C4.12174 8.36435 4.1169 8.34737 4.11687 8.33005V4.65191C4.11701 4.48159 4.05075 4.31761 3.93155 4.19328L0.612982 0.733442C0.600624 0.71971 0.59255 0.702811 0.589714 0.684742C0.586878 0.666672 0.589398 0.648187 0.596977 0.631472C0.604557 0.614756 0.616878 0.600509 0.632485 0.590413C0.648092 0.580318 0.666332 0.574796 0.68505 0.574501H9.31362C9.33276 0.57384 9.35164 0.578955 9.36769 0.589149C9.38374 0.599343 9.39619 0.614121 9.40333 0.631471C9.41143 0.647732 9.41427 0.666014 9.41147 0.683887C9.40866 0.701761 9.40036 0.718377 9.38765 0.731527Z"
        fill="currentColor"/>
    </svg>

  }
  return <svg width="10" height="9" viewBox="0 0 10 9" fill="none"
              xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.93968 0.399283C9.88706 0.280012 9.79962 0.178529 9.68827 0.107517C9.57692 0.0365045 9.44661 -0.000886797 9.31362 1.59694e-05H0.68505C0.552178 0.000264263 0.422236 0.0381684 0.310995 0.109128C0.199754 0.180087 0.111997 0.281051 0.0583744 0.399766C0.00475195 0.518481 -0.0124303 0.649842 0.00891307 0.777907C0.0302564 0.905972 0.0892078 1.02523 0.178612 1.12122L0.181554 1.12457L3.50208 4.58632C3.51913 4.6041 3.52859 4.62755 3.52856 4.65191V8.33005C3.52861 8.45136 3.56238 8.57038 3.62626 8.67442C3.69014 8.77846 3.78174 8.86362 3.89129 8.92082C4.00084 8.97802 4.12424 9.00511 4.24832 8.99921C4.3724 8.9933 4.49251 8.95463 4.59585 8.8873L6.16468 7.86615C6.25867 7.80492 6.33572 7.72198 6.389 7.62468C6.44229 7.52739 6.47015 7.41876 6.47011 7.30842V4.65191C6.47007 4.62755 6.47954 4.6041 6.49659 4.58632L9.82006 1.12122C9.91046 1.02569 9.97003 0.906261 9.9913 0.777858C10.0126 0.649455 9.99462 0.517776 9.93968 0.399283ZM9.38765 0.731527L6.06712 4.19376C5.94773 4.31778 5.88143 4.48169 5.8818 4.65191V7.30842C5.88185 7.32423 5.87789 7.33981 5.87028 7.35376C5.86267 7.36771 5.85163 7.3796 5.83817 7.38837L4.26934 8.40952C4.25458 8.41913 4.23744 8.42466 4.21972 8.42551C4.20201 8.42635 4.18439 8.4225 4.16875 8.41434C4.1531 8.40619 4.14001 8.39404 4.13088 8.3792C4.12174 8.36435 4.1169 8.34737 4.11687 8.33005V4.65191C4.11701 4.48159 4.05075 4.31761 3.93155 4.19328L0.612982 0.733442C0.600624 0.71971 0.59255 0.702811 0.589714 0.684742C0.586878 0.666672 0.589398 0.648187 0.596977 0.631472C0.604557 0.614756 0.616878 0.600509 0.632485 0.590413C0.648092 0.580318 0.666332 0.574796 0.68505 0.574501H9.31362C9.33276 0.57384 9.35164 0.578955 9.36769 0.589149C9.38374 0.599343 9.39619 0.614121 9.40333 0.631471C9.41143 0.647732 9.41427 0.666014 9.41147 0.683887C9.40866 0.701761 9.40036 0.718377 9.38765 0.731527Z"
      fill="currentColor"/>
  </svg>

}