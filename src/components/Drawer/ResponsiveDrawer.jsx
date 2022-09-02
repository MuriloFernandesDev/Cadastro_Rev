import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import LogoImg from '../../../public/LogoPurple.svg'
import LogoActiveImg from '../../../public/LogoWhite.svg'
import { MenuItem } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'

export default function ResponsiveDrawer({ navbar }) {
  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' ? 'auto' : 250 }}
      className={navbar ? 'bg-[#212b36] text-white' : 'bg-white text-black'}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <div
          className={
            'w-28 h-auto transition-all duration-300 text-center mt-2 '
          }
        >
          {navbar ? (
            <Link href={'#Main'} passHref>
              <a>
                <Image
                  src={LogoActiveImg}
                  layout="intrinsic"
                  alt="logo"
                  className="object-contain"
                />
              </a>
            </Link>
          ) : (
            <Link href={'#Main'} passHref>
              <a>
                <Image
                  src={LogoImg}
                  layout="intrinsic"
                  alt="logo"
                  className="object-contain"
                />
              </a>
            </Link>
          )}
        </div>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <Link href={'#understand'} passHref>
          <a className="font-medium text-lg hover:text-blue-500">
            Entenda melhor
          </a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <Link href={'#Experience'} passHref>
          <a className="font-medium text-lg hover:text-blue-500">
            Como funciona
          </a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <Link href={'#depoiments'} passHref>
          <a className="font-medium text-lg hover:text-blue-500">Depoimentos</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <Link href={'#doubts'} passHref>
          <a className="font-medium text-lg hover:text-blue-500">Dúvidas</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <Link href={'#WeAre'} passHref>
          <a className="font-medium text-lg hover:text-blue-500">Quem somos</a>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={toggleDrawer(anchor, false)}
        className="flex flex-col gap-3"
      >
        <button className="btn btn-error py-1 rounded-xl transition-all duration-300 text-white">
          <Link href={'/register/home'}>
            <a>Cadastrar</a>
          </Link>
        </button>
      </MenuItem>
    </Box>
  )

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <svg
              className={
                'swap-off fill-current z-20 ' +
                (navbar ? 'text-white' : 'text-Loja')
              }
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
