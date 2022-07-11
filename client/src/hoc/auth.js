import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_actions";

export default function _auth(option, adminRoute = null) {
  //null => 모두 사용 가능한 페이지
  //true => 로그인한 유저만 출입이 가능한 페이지
  //false => 로그린한 유저는 출입 불가능한 페이지

  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(auth()).then((response) => {
    if (!response.payload.isAuth) {
      if (option) {
        navigate("/");
      }
    } else {
      if (adminRoute && !response.payload.isAdmin) {
        navigate("/");
      } else {
        if (option === false) {
          navigate("/");
        }
      }
    }
  });
}