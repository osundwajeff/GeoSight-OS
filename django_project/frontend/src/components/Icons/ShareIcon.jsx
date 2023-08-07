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

export default function ShareIcon({ active = false }) {
  if (active) {
    return <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49057 4.44681H11.2075C11.4177 4.44681 11.6193 4.36051 11.7679 4.20689C11.9165 4.05327 12 3.84491 12 3.62766V0.819149C12 0.601897 11.9165 0.393543 11.7679 0.239923C11.6193 0.086303 11.4177 0 11.2075 0H8.49057C8.28039 0 8.07883 0.086303 7.93022 0.239923C7.7816 0.393543 7.69811 0.601897 7.69811 0.819149V1.87234H7.13208C6.68171 1.87234 6.24979 2.05728 5.93133 2.38646C5.61287 2.71565 5.43396 3.16212 5.43396 3.62766V5.14894H3.39623V4.56383C3.39623 4.34658 3.31274 4.13822 3.16412 3.9846C3.01551 3.83098 2.81395 3.74468 2.60377 3.74468H0.792453C0.582281 3.74468 0.380718 3.83098 0.232104 3.9846C0.0834904 4.13822 0 4.34658 0 4.56383V6.43617C0 6.65342 0.0834904 6.86178 0.232104 7.0154C0.380718 7.16902 0.582281 7.25532 0.792453 7.25532H2.60377C2.81395 7.25532 3.01551 7.16902 3.16412 7.0154C3.31274 6.86178 3.39623 6.65342 3.39623 6.43617V5.85106H5.43396V7.37234C5.43396 7.83788 5.61287 8.28435 5.93133 8.61354C6.24979 8.94273 6.68171 9.12766 7.13208 9.12766H7.69811V10.1809C7.69811 10.3981 7.7816 10.6065 7.93022 10.7601C8.07883 10.9137 8.28039 11 8.49057 11H11.2075C11.4177 11 11.6193 10.9137 11.7679 10.7601C11.9165 10.6065 12 10.3981 12 10.1809V7.37234C12 7.15509 11.9165 6.94674 11.7679 6.79312C11.6193 6.63949 11.4177 6.55319 11.2075 6.55319H8.49057C8.28039 6.55319 8.07883 6.63949 7.93022 6.79312C7.7816 6.94674 7.69811 7.15509 7.69811 7.37234V8.42553H7.13208C6.86186 8.42553 6.6027 8.31457 6.41163 8.11706C6.22055 7.91955 6.11321 7.65166 6.11321 7.37234V3.62766C6.11321 3.34834 6.22055 3.08045 6.41163 2.88294C6.6027 2.68543 6.86186 2.57447 7.13208 2.57447H7.69811V3.62766C7.69811 3.84491 7.7816 4.05327 7.93022 4.20689C8.07883 4.36051 8.28039 4.44681 8.49057 4.44681ZM2.71698 6.43617C2.71698 6.46721 2.70505 6.49697 2.68382 6.51892C2.66259 6.54086 2.6338 6.55319 2.60377 6.55319H0.792453C0.762428 6.55319 0.733634 6.54086 0.712403 6.51892C0.691172 6.49697 0.679245 6.46721 0.679245 6.43617V4.56383C0.679245 4.53279 0.691172 4.50303 0.712403 4.48108C0.733634 4.45914 0.762428 4.44681 0.792453 4.44681H2.60377C2.6338 4.44681 2.66259 4.45914 2.68382 4.48108C2.70505 4.50303 2.71698 4.53279 2.71698 4.56383V6.43617ZM8.37736 7.37234C8.37736 7.3413 8.38929 7.31154 8.41052 7.28959C8.43175 7.26765 8.46054 7.25532 8.49057 7.25532H11.2075C11.2376 7.25532 11.2664 7.26765 11.2876 7.28959C11.3088 7.31154 11.3208 7.3413 11.3208 7.37234V10.1809C11.3208 10.2119 11.3088 10.2417 11.2876 10.2636C11.2664 10.2855 11.2376 10.2979 11.2075 10.2979H8.49057C8.46054 10.2979 8.43175 10.2855 8.41052 10.2636C8.38929 10.2417 8.37736 10.2119 8.37736 10.1809V7.37234ZM8.37736 0.819149C8.37736 0.788113 8.38929 0.758348 8.41052 0.736402C8.43175 0.714457 8.46054 0.702128 8.49057 0.702128H11.2075C11.2376 0.702128 11.2664 0.714457 11.2876 0.736402C11.3088 0.758348 11.3208 0.788113 11.3208 0.819149V3.62766C11.3208 3.6587 11.3088 3.68846 11.2876 3.71041C11.2664 3.73235 11.2376 3.74468 11.2075 3.74468H8.49057C8.46054 3.74468 8.43175 3.73235 8.41052 3.71041C8.38929 3.68846 8.37736 3.6587 8.37736 3.62766V0.819149Z"
        fill="currentColor"/>
    </svg>
  }
  return <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
              xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.49057 4.44681H11.2075C11.4177 4.44681 11.6193 4.36051 11.7679 4.20689C11.9165 4.05327 12 3.84491 12 3.62766V0.819149C12 0.601897 11.9165 0.393543 11.7679 0.239923C11.6193 0.086303 11.4177 0 11.2075 0H8.49057C8.28039 0 8.07883 0.086303 7.93022 0.239923C7.7816 0.393543 7.69811 0.601897 7.69811 0.819149V1.87234H7.13208C6.68171 1.87234 6.24979 2.05728 5.93133 2.38646C5.61287 2.71565 5.43396 3.16212 5.43396 3.62766V5.14894H3.39623V4.56383C3.39623 4.34658 3.31274 4.13822 3.16412 3.9846C3.01551 3.83098 2.81395 3.74468 2.60377 3.74468H0.792453C0.582281 3.74468 0.380718 3.83098 0.232104 3.9846C0.0834904 4.13822 0 4.34658 0 4.56383V6.43617C0 6.65342 0.0834904 6.86178 0.232104 7.0154C0.380718 7.16902 0.582281 7.25532 0.792453 7.25532H2.60377C2.81395 7.25532 3.01551 7.16902 3.16412 7.0154C3.31274 6.86178 3.39623 6.65342 3.39623 6.43617V5.85106H5.43396V7.37234C5.43396 7.83788 5.61287 8.28435 5.93133 8.61354C6.24979 8.94273 6.68171 9.12766 7.13208 9.12766H7.69811V10.1809C7.69811 10.3981 7.7816 10.6065 7.93022 10.7601C8.07883 10.9137 8.28039 11 8.49057 11H11.2075C11.4177 11 11.6193 10.9137 11.7679 10.7601C11.9165 10.6065 12 10.3981 12 10.1809V7.37234C12 7.15509 11.9165 6.94674 11.7679 6.79312C11.6193 6.63949 11.4177 6.55319 11.2075 6.55319H8.49057C8.28039 6.55319 8.07883 6.63949 7.93022 6.79312C7.7816 6.94674 7.69811 7.15509 7.69811 7.37234V8.42553H7.13208C6.86186 8.42553 6.6027 8.31457 6.41163 8.11706C6.22055 7.91955 6.11321 7.65166 6.11321 7.37234V3.62766C6.11321 3.34834 6.22055 3.08045 6.41163 2.88294C6.6027 2.68543 6.86186 2.57447 7.13208 2.57447H7.69811V3.62766C7.69811 3.84491 7.7816 4.05327 7.93022 4.20689C8.07883 4.36051 8.28039 4.44681 8.49057 4.44681ZM2.71698 6.43617C2.71698 6.46721 2.70505 6.49697 2.68382 6.51892C2.66259 6.54086 2.6338 6.55319 2.60377 6.55319H0.792453C0.762428 6.55319 0.733634 6.54086 0.712403 6.51892C0.691172 6.49697 0.679245 6.46721 0.679245 6.43617V4.56383C0.679245 4.53279 0.691172 4.50303 0.712403 4.48108C0.733634 4.45914 0.762428 4.44681 0.792453 4.44681H2.60377C2.6338 4.44681 2.66259 4.45914 2.68382 4.48108C2.70505 4.50303 2.71698 4.53279 2.71698 4.56383V6.43617ZM8.37736 7.37234C8.37736 7.3413 8.38929 7.31154 8.41052 7.28959C8.43175 7.26765 8.46054 7.25532 8.49057 7.25532H11.2075C11.2376 7.25532 11.2664 7.26765 11.2876 7.28959C11.3088 7.31154 11.3208 7.3413 11.3208 7.37234V10.1809C11.3208 10.2119 11.3088 10.2417 11.2876 10.2636C11.2664 10.2855 11.2376 10.2979 11.2075 10.2979H8.49057C8.46054 10.2979 8.43175 10.2855 8.41052 10.2636C8.38929 10.2417 8.37736 10.2119 8.37736 10.1809V7.37234ZM8.37736 0.819149C8.37736 0.788113 8.38929 0.758348 8.41052 0.736402C8.43175 0.714457 8.46054 0.702128 8.49057 0.702128H11.2075C11.2376 0.702128 11.2664 0.714457 11.2876 0.736402C11.3088 0.758348 11.3208 0.788113 11.3208 0.819149V3.62766C11.3208 3.6587 11.3088 3.68846 11.2876 3.71041C11.2664 3.73235 11.2376 3.74468 11.2075 3.74468H8.49057C8.46054 3.74468 8.43175 3.73235 8.41052 3.71041C8.38929 3.68846 8.37736 3.6587 8.37736 3.62766V0.819149Z"
      fill="currentColor"/>
  </svg>
}