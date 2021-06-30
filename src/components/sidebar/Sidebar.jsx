import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Sidebar.module.scss";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/features/sidebar/sidebarSlice";
import CancelIcon from "@material-ui/icons/Cancel";
import Logo from "../logo/Logo";
import { useHistory } from "react-router-dom";
import { signIn } from "../../helpers/signIn";
import { providerFacebook, providerGoogle } from "../../firebase";

const Sidebar = ({ sidebar = false }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const hideSidebar = () => {
    dispatch(closeSidebar({ sidebar: false }));
  };

  const signInWithGoogle = () => {
    signIn(providerGoogle, dispatch);
  };

  const signInWithFacebook = () => {
    signIn(providerFacebook, dispatch, history);
  };

  return (
    <AnimatePresence>
      {sidebar && (
        <Fragment>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
            className={style.sidebar}
          >
            <div className={style.sidebar__header}>
              <h2>Sign In</h2>
              <CancelIcon
                onClick={hideSidebar}
                className={style.sidebar__close}
              />
            </div>
            <div className={style.sidebar__body}>
              <h3>Welcome to</h3>
              <Logo width={100} alt="Liva Logo" />
              <button onClick={signInWithGoogle}>
                <div className={style.sidebar__button}>
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-256.png"
                    alt=""
                  />{" "}
                  Sign In With Google
                </div>
              </button>
              <button onClick={signInWithFacebook}>
                <div className={style.sidebar__button}>
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-256.png"
                    alt=""
                  />{" "}
                  Sign In With Facebook
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={hideSidebar}
            className={style.sidebar__outside}
          />
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;