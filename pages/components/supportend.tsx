import Link from 'next/link';
import styles from './Button.module.css';
function supportend() {
  return (
<section>
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
       需要其他
        <span className={styles.abc}>協助</span>
        嗎？
      </h2>
      <div className="space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:gap-2 xl:gap-8 sm:space-y-0 md:mt-12">
        <Link
          href="https://ssangyongsports.eu.org/c"
          className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%"
            }}
          >
            <img
              alt=""
              className="service-icon"
              src="https://th.bing.com/th/id/OIG.C96gOk0chUn1kKHxKOg3?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              width={75}
            />
            <noscript />
          </span>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
            聯繫我們
          </h3>
        </Link>
        <Link
          href="/chat"
          className="block px-8 py-12 text-center bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light"
        >
          <span
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
              position: "relative",
              maxWidth: "100%"
            }}
          >
            <img
              alt=""
              className="service-icon"
              src="https://th.bing.com/th/id/OIG.cyGRgj1FvZpQO.xkVoOi?w=173&h=173&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              width={75}
            />
          </span>
          <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
            在線支援
          </h3>
        </Link>
      </div>
    </div>
  </div>
</section>
      )
}

export default supportend;
