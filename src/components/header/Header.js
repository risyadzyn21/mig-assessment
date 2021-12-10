import { Avatar, Breadcrumb, Input } from 'antd'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as AiIcons from 'react-icons/ai'
import { getLoginAsync } from '../../redux/actions/actions';


function Header() {
  const dispatch = useDispatch()
  const { Search } = Input;

  // const {  isLoading } = useSelector(
  //   (state) => state.userReducer
  // );

  useEffect(() => {
    dispatch(getLoginAsync())
  }, [])

  const onSearch = value => console.log(value)

  return (
    <div className='header'>
      <Breadcrumb>
        <Breadcrumb.Item className='breadcrumb-1st'>Perusahaan
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Mitramas Infosys Global
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className='right-section'>
        <div className='right-section-1'>
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
          <AiIcons.AiFillBell />
        </div>

        {/* <Avatar icon={<AiIcons.AiOutlineUser />} /> */}
        <div>Login</div>
      </div>

    </div >
  )
}

export default Header
