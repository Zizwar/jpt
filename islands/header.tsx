
import type {  UserView } from "@/communication/types.ts";
export default function Header({user}:{user:UserView}) {
  return (
    <>
      <div class="header">
        <div class="logo">
       <svg height="64px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg" fill="currentcolor"><path d="M512 256a256 256 0 1 1-512 0 256 256 0 0 1 512 0zm0 0"></path><path d="M448 256a192 192 0 1 1-384 0 192 192 0 0 1 384 0zm0 0"></path><path d="M416 256a160 160 0 1 1-320 0 160 160 0 0 1 320 0zm0 0"></path><path d="M240 240h32v32h-32zm0 0" fill="#fff"></path></svg>

        </div>
        <div class="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="user-settings">
          <div class="dark-light">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
          <div class="settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </div>
          <img
            class="user-profile account-profile"
            src={user.avatarUrl} alt={user.userName}
          />
        </div>
      </div>
    </>
  );
}
