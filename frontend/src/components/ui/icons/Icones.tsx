export const IconeEmail = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke="#62748E"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke="#62748E"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

interface IconeProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const IconeSenha = ({ className, ...props }: IconeProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.41998 13.9799 8.41998 11.9999C8.41998 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47003 3.71997 5.18003 5.79997 2.89003 9.39997C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeSenhaFechada = ({ className, ...props }: IconeProps) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.58 11.9999C15.58 13.9799 13.98 15.5799 12 15.5799C10.02 15.5799 8.41998 13.9799 8.41998 11.9999C8.41998 10.0199 10.02 8.41992 12 8.41992C13.98 8.41992 15.58 10.0199 15.58 11.9999Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.47003 3.71997 5.18003 5.79997 2.89003 9.39997C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 2 L22 22"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const IconeNome = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
        stroke="#62748E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
        stroke="#62748E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeSol = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sun-icon lucide-sun"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
};

export const IconeLua = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-moon-icon lucide-moon"
    >
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </svg>
  );
};

export const IconeLupa = () => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5L15 15"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeSair = () => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.4165 6.29995C7.67484 3.29995 9.2165 2.07495 12.5915 2.07495H12.6998C16.4248 2.07495 17.9165 3.56662 17.9165 7.29162V12.725C17.9165 16.45 16.4248 17.9416 12.6998 17.9416H12.5915C9.2415 17.9416 7.69984 16.7333 7.42484 13.7833"
        stroke="#FAFAFA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4999 10H3.0166"
        stroke="#FAFAFA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.87516 7.20825L2.0835 9.99992L4.87516 12.7916"
        stroke="#FAFAFA"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeImagem = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4"
        width="26"
        height="24"
        rx="4"
        stroke="#0D93F2"
        strokeWidth={2}
      />
      <circle cx="11" cy="11" r="2.5" stroke="#0D93F2" strokeWidth={2} />
      <path
        d="M5 24L12 17L16 21L21 16L27 22"
        stroke="#0D93F2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeLike = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
        stroke="#EB5757"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconeLikePreenchido = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4404 3.59998C19.2317 3.60021 21.4999 5.87384 21.5 8.68982C21.5 9.82544 21.3185 10.8737 21.0039 11.8461L21.0029 11.849C20.2487 14.2357 18.7033 16.1595 17.0352 17.5931C15.3649 19.0286 13.6004 19.9479 12.459 20.3363L12.4531 20.3383C12.3532 20.3734 12.189 20.3998 12 20.3998C11.811 20.3998 11.6468 20.3734 11.5469 20.3383L11.541 20.3363C10.3996 19.9479 8.63512 19.0286 6.96484 17.5931C5.29669 16.1595 3.75127 14.2357 2.99707 11.849L2.99609 11.8461L2.88379 11.4779C2.63838 10.6104 2.5 9.68347 2.5 8.68982C2.50008 5.87384 4.76829 3.60021 7.55957 3.59998C9.20459 3.59998 10.6795 4.39957 11.5996 5.62927L12 6.16443L12.4004 5.62927C13.3205 4.39957 14.7954 3.59998 16.4404 3.59998Z"
        fill="#EB5757"
        stroke="#EB5757"
      />
    </svg>
  );
};

export const IconeTresPontos = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
};

export const IconeFechar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

type IconeLikeAnimadoProps = {
  isLiked: boolean;
};

export const IconeLikeAnimado = ({ isLiked }: IconeLikeAnimadoProps) => {
  return (
    <div className="relative h-6 w-6">
      {/* Outline (sempre visível por baixo) */}
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <path
          d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
          stroke="#EB5757"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Preenchido (aparece com transição) */}
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute inset-0 transition-all duration-300 ease-out ${
          isLiked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <path
          d="M16.4404 3.59998C19.2317 3.60021 21.4999 5.87384 21.5 8.68982C21.5 9.82544 21.3185 10.8737 21.0039 11.8461L21.0029 11.849C20.2487 14.2357 18.7033 16.1595 17.0352 17.5931C15.3649 19.0286 13.6004 19.9479 12.459 20.3363L12.4531 20.3383C12.3532 20.3734 12.189 20.3998 12 20.3998C11.811 20.3998 11.6468 20.3734 11.5469 20.3383L11.541 20.3363C10.3996 19.9479 8.63512 19.0286 6.96484 17.5931C5.29669 16.1595 3.75127 14.2357 2.99707 11.849L2.99609 11.8461L2.88379 11.4779C2.63838 10.6104 2.5 9.68347 2.5 8.68982C2.50008 5.87384 4.76829 3.60021 7.55957 3.59998C9.20459 3.59998 10.6795 4.39957 11.5996 5.62927L12 6.16443L12.4004 5.62927C13.3205 4.39957 14.7954 3.59998 16.4404 3.59998Z"
          fill="#EB5757"
          stroke="#EB5757"
        />
      </svg>
    </div>
  );
};
