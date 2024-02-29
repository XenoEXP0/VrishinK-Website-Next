import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const FAQ = (props) => {
  return (
    <>
      <div className="faq-container">
        <Head>
          <title>FAQ - VrishinK Website</title>
          <meta property="og:title" content="FAQ - VrishinK Website" />
        </Head>
        <header data-thq="thq-navbar" className="faq-navbar-interactive">
          <div className="faq-container1">
            <div data-thq="thq-navbar-nav" className="faq-desktop-menu"></div>
          </div>
          <h1 className="faq-text">
            <span className="faq-text01">Erica</span>
            <span> Dome Of Journeys</span>
          </h1>
          <nav className="faq-links">
            <Link href="/">
              <a className="faq-link">Home</a>
            </Link>
            <Link href="/destinations">
              <a className="faq-link1">Destinations</a>
            </Link>
            <Link href="/about">
              <a className="faq-link2">About </a>
            </Link>
            <Link href="/contact">
              <a className="faq-link3">Contact</a>
            </Link>
            <Link href="/faq">
              <a className="faq-link4">FAQ</a>
            </Link>
          </nav>
          <div data-thq="thq-burger-menu" className="faq-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="faq-mobile-menu">
            <div className="faq-nav">
              <div className="faq-top">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="faq-logo"
                />
                <div data-thq="thq-close-menu" className="faq-close-menu">
                  <svg viewBox="0 0 1024 1024" className="faq-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="faq-links1">
                <span className="faq-text03">About</span>
                <span className="faq-text04">Features</span>
                <span className="faq-text05">Pricing</span>
                <span className="faq-text06">Team</span>
                <span className="faq-text07">Blog</span>
              </nav>
              <div className="faq-buttons">
                <button className="faq-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="faq-icon2">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="faq-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="faq-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <img
          alt="image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAABxVBMVEX///8ATKQBRJMAQ5Ha7P/a7f4ATKL///0AQoz//v8ASJwAR5kATan///wARpoAQo4AjP8Blf8AkP8AMo3Fy+f6//8Anv/E0uMAj/8AQIcAov8Aif8Ar/8Aq/8Am/8ATKoAtf8Bpv8ARZyvw9cAsf8ArP/z//8BmP9ohK7Kzt8AN47i8/8AR54AO5XS3uebsckAM4MAH0oAGz0AAEsAADYAovEAAE9VpOoAhf/u9vrb8//q//8AI1UAPp8ALYwAKpIAACsGNGyd0/S95fUAAEAAre8AMZIAkeWSx+0AgfB3zvQAJVIAOogAAC0ALIPm6u8AACIAJ3CY2e160ejI9PxAueYssOptwOclo+TK7fsnr+Fgse+uz+Rrv+2IueZ4sN1etvZOn+5kn9a06/QjVZZYYYaQlauS2eqlqrkGIFsyYptGUnIlNmAAFlcAiuZhaYI5hctlmbo6XKqqveBifLMMdc5Jb7CIp9MGXrkoR3xufJsJcuIGXsIJa8KQmrV4rtOBlMt4mcErPWADMXBIVW4NbL5CXZeCv/QMe86Fna8KV5VFn85qfawLltqGiJUAGogqMk4AFW43QFZfZXVyeH8vSodbbZVQ6vP3AAAgAElEQVR4nO2diUMTSbrAm4SkctANgdeEcAQJ0GA6B4cZ7E50TCITAhE0MkAGcJaRdWXV7D4FdZFhlmHE3Tfo25lZ/Hvf91V1dxJupUF3Xj6OQKeP+vV31FfVVRWOq0pVqlKVqlSlKlWpSlWqUpWqVKUqValKVapSlapUpSpVqUpVqvL/Wgjn5Ajh8MdJeOJ0cvANW3+XgnAEUHmGC78A+VMX6pyEaZNn/yAubPi0JTo/IUQknBRP5+/eHb+bT6txffsnLdV5CS9O3/169BJKD8jMbFrif6+qFe9rpDpte2wmHye/J8USAmEJo9J0GSrCtoP09s7cF/FN5++BGasXWtmIfxot0ylDBdb23tisxKPf/j7smVau8fHRcp32IChIR3tHR9ecilXQpy6mCUL1Svi4bsIlnQIpSlcX0E6T30dIprmSNKtrtZ2xtpdQ8ddc/PdBC4rlRbThkqv2xlAoJoCitM5Jzt8DLMba+6N6XQOwc7P5ghpX0/mZWBeDbe1qbR4HVkwlT+O6WuAmxq/PSPj4NxoqBKbYOFSsLJMQCzMUFaUrM00z5ZPPhrs4NV799fMRQu72aLVqe3ssL2pqwbAlzQImhW1unhOd0CYg4gkngx/cDTnxv8+LFQwzPtpusI4TWqdytGHn5KX5VibNrcX0KVRLFUlESSJoHgTlQihOKUTk85QVqpr2jpk4L/K8E7dTMr6QQa0Cq795HrecXHa4WZGREZVbWIjzoOTPq3om0jcQlnpZCpGnpgcZxmJeIphdSSPNSNvsb/ZnVHKyD+IevHzvniJ+V/yWiOInU6yTeaLWKtctkqijve3ttFLtiBU4bK1Lc12tmTSPBSd/aKbi9/v7UscGHGz9sgSaGYUky/zYfAEOcZ7k6OYL48SOBzCt8r6WfLueLHXE4tTX0hiUUrgX4f/gR1Bk7ZsXj/NZ/VZqvyj1wtJ3Eq8Fq4sULCeB9ur9+9MiZTYqw9kODRVq1bn5xVTq/jiY7hx4HKZWMY20r8+TifPHWLFW13CiIsuyDX4UkeMlmbfJ2GS6GEhdsBHH0/bqKDbajMBKxBmE7dJFi74zCAbHpIsaap/HU1T5Y4vNSG02W62tln7LcFvF75ZsFx+kCBHzo5d6OsBkY7MitWS6WYoxrWqpEpXMbJywWuktY/VQKZDjMyJGqgky20C76sjCudU/R1ZtTkgKe3q+zudnY12tKWJ0t0ixrjJhsGMiodVPfM5TQvU0pssuc+D8qNRaQ2wasE2EukxSTKRlJgkmJhXuji/eTccx4B7YKT7T3jsrcaKYam2lkYgmdpGokewb2dIiKB7PWYh5EJXCNoIs//HBZQVPRSQ1f/dPBYk4RWrYYK2KrQy1TGwA+u2IRIjTLFqsJUQwU3BJSHFjo+MHQwkWvSN2Xxr/lo9n/H0LeH+mHv5l5YubXcyIW3VphkBEq490ps9QK7J6/nzz5vDwoweXJezA6WmPjaaRlbqqzWY7kpZPL43RHhFzeOntlWZH9bY3tLYP5qUpoIrF5lSS8vd57nGXHzy++cWTRw+8sZKvsvxhkVZRfLroKUcFKYiRh39JDg//GRtJWF2h8xMn2u/RsKhb2klpVjJF26SzqNbYXGyug/Wk7OsiIymAao4BawaK/9fHX3yxso5GGZ8zULX8YYxWU1KG2a9O2tjiUbG4SuS/4UKjd/N5aBO1piRZtTHvPAIXbgQYXVrhTapsMUvhMdS2z9yPS+pd1NXivkyNkDTg+DPphSKW3/74QYTjbNH+p18VK1EhU6JGMc0Uq5OCFFOyBHWn+HVP++g03F5psbX1bdpWIYfA2mwypyy9MS1GOaGSmIFcHmpHzPfykLhDule5DwFX9fe1TqeLDY0N2TQnP1utv3btWmfnWleJlWYQSyMj+N1HterRUBsaGrJfCc9fLNjux9p7x4n0c5pP+5v7xmWN8kjVoiFzYyOKSakFJmjp3vberjwh+Z/jJB7zo+dV7AHZ0CJoakmMA2xbZms5DJx1nXV1dS8hChukGJKWmFRoFWBbNmD/zvDTt+CsPX/4w5zKp/r8fW8LrHLVUA8i422QRUXhTGzIj6OnLqbysTmJ6XBJz74x7Uf/JfERKHmx2NDWlu0M11HQOnwptpaj9hULNL2NZzyNJa2ibMDeNZ3Xih3o/JBOpoug/LWb615ZrkDdD4u5FEfMgsV64musQcAa5+NEXMRSF+P60zjtW3z4t7UWIG27+grKXFNTp0nnGjRWm3VU0H4BDyRSkaEy0Daw4rqauk74/kcX2nyeQ9bGxqVHw8PrEfUkzzWvrUdhW7vYDXdKizSyZA1YltFefjQ88c+xtWz21UZNqMauKxa11exvLmXAnsYCpsW8lGkBVk2pcI9QsZ3AW/c9svbNj42AP3sa3sjdPw6vbNrkcs3uw4V/ZVMbPrO0R8G/yIljjRhEW4qSVoc78Ylr5C/DTzafrX7VWRcKuexQZF2x6LhrOiutarIACy0FqdhSUiuYQzaE+8JPDd6avgKXxvezaVlVo4+HE1FVtdUeqlwWvkxsxhOSYm438sMPGYwsLQ0jZW8rD4afrL94fg2ssKbGXtPZSQ1S0yvoy1+eAWcx3+c5qdjQoikVTb9to4Z5OKgWkhJPfnosC28VaXxSN1eGH3nVwy3ZpgVkzpwMCrvG1AzA9nnGJOlNC1pfdoyInDZEIPLj8I9/B9SSPo3wBPCg7Jd+v84KsClQliwXig0G61VgDekBDSorMJzGLLJmrzmoSuXa9S+ebMo66GHWbFZXI1odWUT1tEASeq+tpaGlrRgnTp61Ed7dTKw+D2sVzUEBbQfW/H2lZCnLpAGtmKn1KhixvXR050YjjXRtr+rcoWtPn6FK5e7kF4+88lGwtlrFrJ5GraqA0o4svlnCImYXtB5cburHleSyvbPuCFg06Tp7YK0E21IKwcyAkbXGVTIJMIbODQh0rzYg0NntNdeeLwCuLK8Pr0RlW4VUJBYmwnKFIg2fEE0arr4aEzEWg24fJlZ8LPTW0ABzCC0U3xUqemiypOUPegRmar2arXPVlN8edHy73QWg6AU1neEtNGW5OzG8XmuzHcprs5kVj7EhwPHqSBaKdxUjZ4po7cx3w9sO3VU7O2sOYaV3ocbtWitLIFoatRDMJFtjqencdwhgYky32+F/e+e15QUVUgfbH4d/1FOMA7AmxWPMkQj2CKRHiuBsS2Nx7EDkCa/89GTbjaXSIulhsHZadLtb+N5TnkIYpFevvgq57eU+XsMcnb5gaKfbQLkAKT8YXulW9yuXubFikmpZby38EiXaq4d27eR5cNdtex3a2rGCWqoD2rpsY8lVS2rdCAihow4r+y+8nEbP7V65Wea45QmkbHpXlN7bgqEpspLwnUhqiCsQCGxkG8oisIZqcR/KekA6gxiWZW9ieFMuaxKUYM+v95hwkcFEPYSQupOLySQkuIVA3UaWkdIY/Aq06nad8nh7XdMWWnDtj8PrLJ2qrWgamBah9osTWVcc9v3GdqSgC9pdAgjwbmy8gnploy4E/7pcpzQO6rirZbQHvPa8HoIQErmyDazosafCpfGmxoW4bosbod1ut+ByW06rV6yNamquLUMypdoe3VyXZabbMr9VzgkW9er7ABPWVQPGDMAuF5C64fV0zqodbkfewNM01EFAC36rqoX79wul9oH5sIQOVlMer3xAbNonwOt2sYzhg8UecqSxtfd4OIrDIEG+zquads2HddKexp8Svg/SaoWw+vMjj62pE9JyrRy5+Wc2KKW9t2vmvkx5zwXWyb17sn362GSqQJDotIBuZezEbm9v72jv6O2K5WW9lWe2EO7hzW3XybnE0QU+Ey20N5Ztcn6059Kl0a/Hx7/BR0mxgo32VpiPSqZuJi00BTxLoT9SOuvs0DDYmZ7B4crTkLGSdKy1tXkG7djMx1ua8NxPKw7aKsH218cI6ucMAkeH3/aABad5XoUsHftQimnsUDUT08k6Ph7eTNo/nvTMgnc5lGnv7eiK8/HMzyIpYMfurGx2NMbRC9zUzW233YVtr7Mp6Ey8MXwymInNvS3w/Bh25Y2oJsPSh2/co4QvFLDbQ6G6j6spTZCQXXsIGpvmxXwG+/KWzId10khseR271B77XvhEqAhLH/c2+1OEG/Pg0+zGJdm01rsGC7hTTyasryHmz8Q6vg99Ks3WhOiDMn9fqpDO4GODxoZ51WRYnKryHprrsfZ8PJ7ONNedPok3V+yBYit9drSYSjXTTuxsymYzt/HOc8Q7nBC+b+8YX4xMZ/wvWX57kn4hkLlDdWU70trjUAgafeh7IUigta1Ga4EeE8J/XS/xoUGfR+XFpZbGlsa2YsFsWIhOe4lk6HVHa3M+PtLn+d6tw+K3i8qByIkboXSs5C6NxnWYTbhcdZ2MhZ4PY2CorFlkp+/Z6XZXqNjn93sa0/F4Bvt5smMYn0yFFbnoLwlH6GVrc1/qXktj40v3QbaD1QTUUrT71+0yaqqQ3XXoobARv+zG3uW3j/3l0v6u8fQ1ejzFYhG7ea5ixWMTzZzCSIgEinXXhIr+YjrV0PIKWt4lBR5Ji++EAC5UUyp4DQIf3NMFthvqDIRCgUAghBosPy/Vqov9oLUUPY0tbey5wcg0PjLgzJ2v+ezOhA/KUJdtzGbbsnVu48bDS7jpCAlo2nSFwl+xLUHc6HYdELsrdK3J+vT56urq86dCMBximtYEydGwKWvI7g6tQRBuu3o1CzYs28zrSdVlZ2UCyhgSajbw0YS7vLzhF/91hDwHJVHH/epZaWN/OLSPFP4PN+1sehWRdiWJivfFDvBqtgzvh1xCwP4UHdbFfoS6l69GRt70D7MnQCIx6ykevWveAQhPWCqXILgFgC6H7T7q4P4AYwnV6x1iEEgiTTqBBgrvN616tR5q/VDv7nUXuyCKYI/1XOqJfR/QeV1CUzSudl95QB98maVXbTh7/52Ez+46XI6G3Q0wnGtbxukIL+4EXCEDFsQdyHXTUTmVB3t9Abe+00tAHY31dr0WjKMCf1ZV2+MfVZupGQWdvBDcThziaaeEDX3lLYHwXDSMpHqpISQtR9gcxYqrEl7ZuabdkkCsZ3Rais+2tpbd8GDaJq9fqVXBY3mTns866Y93MpE8ivUkWCjwsjGOHg1FbnK5ytxW2JPpXI6DtGgDuKfwuqfrrvSDMp1pXrOwY9FcflDV6K2oauPYyA9zYKEJ0J9LJI+y4hNhXcGoAUvPthMoP3zARtjgHmdFkMHOPdkBURmi0z86umKxlDhe7CuWggXYsc17ZV1WJNG84XxQPPGpb+JIl3WfFKBcTVNGYZw4yDUaLnMJvBP6BICyGMX+835Fdf8POmMvVfR4soJ+aMids8m2x48U8duFU82TOVbYwHxqXJFgEtKnkzQLqpiKVMgqwrpdO9rYVl29yqTLDSrDHmR3YAenFThBrSJGKGVqCkf9sgkW8LVKIy8kbv6R9Dxkbt8bsHCTn8nqo8diamSBYxMTzvIMhM5awVlHpDuYnDgNLBe9Xp5TBAPY/e9qihLtQad++1cDbsyrsNxN3Ww+BdASMeq4fv26ZRMzXc2kI5MufFBS7PPMx+cbGrI1ZTaBj23Xr0ypKQ7nRrHJuh8NSy8JcYMn/eEEBGNBOB4WBAJtpYnDt3BdYTO0yJS+W3eTixVaCDlYvQENDYi+TSF3KOBq2jP6Cgm3jLHIjQliMdvWsGHRYaEsgeeq/PDKZU6MT0/HRe5MtsyGrdORxTvBlaTbfVTdo8E6D8Di0yso067ui/0aBFGsAaZX0A7H5sbD27vXcJPbErr2vlTuF2Ew3EDAvpbFATSY0Bi3UQgo3MOb/5xeHB0dnZudPlv9A6zgPfH0+Ndzsb/+j/sIvZaZMeGiAfposrQrHNXUTZhXcjnDBCBMs32avCwQg2a9k2wb5KJNXsO/vU30JrsxEQkIloo7/qVCold+xm7k9t6uuTzhzpBd4LILUn5Gm60ee3kUrQaLF4o2BUrioiUL5fRRSrVf9msn5rzMjuFOKGyeMMD24wGQREDsCu8a6ZRCM2lwcQFIXRWs7q/GxMj/QOG+GU/NxLpi6UMYTs0KNiyxOdxsSv7rwL6r7dMsQHT3lwk6LC04C6wkek13UE50CNTEhXpOG4lHxL2AfjcFl0/UYJ3iskC30IedZaC4IfxXdWqup30Wh6DPtjbPSfzHNwcglo+jVkdHZ0ZxNhJkpvRy7nIpr2f3GdEy8qBJavI+0BRh01IItxmmFhl4blxsKmec0eUeKOX2q0LlBfW98Ogodz/WG5uWZsd4yK6KhY9GxQiJU5N6ZiDUSek5nJpDK8cDUorGhLBJvDiaCAIpPmEPGKFVCbrDL1hix0PThxZYWDWuFgnqpwbayYhx/3YDh7HS/QKb3Dgu/jA3N83jtJP8x0coQqRvcE5+HP4gZDrW2ty6RgcI7JMyzUJYRWEhnNsLWAQhvKWX2vslZBAcT7MlJ7wJaaAQ0LwY0++mgH5qtxCMGMX4e+DAFekusDXwd26xtaurOQOsOBo7dRbY6bl2nJ/A5d8WOHHe39xcPAxWKAWo8uyWcE+hmKHJiD7jsj8sBK7LLLHguU1o0bhLsNCiayo7ZdCw/SNgBQ021dza3DyipnHaSfYME/MIyeNjlbnFsTnQbnyu2d/nt1vd+6+4PzcmRE9zl3E80J6+XbSANqAa0lx7KhiAO6fDwhGRoNulnxM0axT7SM3Cbf87t4CdyCPpPPYgZ9WzTGUa12aW4Wz1WToc/KXlEN8JGrCV3V7LgBOO6vcgEoQShvv10AxNH6hLMOHQaKeCUHpLKABXCLkNn3Ue4bMC/fWCe5gBX53n4p6GlqvfnanbbZzOt8L5c9IbOunI89J6NCxOEZu6XBKvA4K3bsUc2bweCIfDORauMP/AECXo0ZhwSk4IQV26TF13UjaUtCocHp5Au9BgercNBuxZyjS0XS3Gz9ITRahDQHtDEvMefILU6LHXV16aGlNQTxeB4H+/NOQ6lBojkna26CaVKW3ZOqJQWIvOyol7cLbArhTZbQoFjHqWg3rWfUgNYMHBVHDhn/6VzmSx+/hqRuX5j4clpJChU8oyP/wwR+cGtDQGHMLBG61rFi4VDRqlcVHfi3JaRa8bGE9DNXo12qfQpBi0/WF34LoXLLHbd23V2F/JHVH1gFN8GeH+9RMnpb7LZL5boBPgz5AuSnM4c8MzL4r5lkZPQ0PDK/Cog15b8lloltPQQYMMvgVWqzcyeRy3rAcvvAHdYTiXnnLAVu91t8VB3VnZ6S7LjQX3Yb4DxRD+V5m69Q7OKkoSnv90a10cwSqSfBHH989zXB6HRrc1hKyC5aAEy9qzQW2bG77B1laNqQp6FCZOZvCANBBwW3JbGivtcWJtIMgmSyp6EXQfckl2hSD38PZDdgRbwfIMbTy46DwO7vfPjyzRZw0vrZYjYIkBaxTNCj9N3VoXAGtVOPXVF2idDJm/2yHsibSnDVdhlH3hph2v9jZhG8U9qLEMPrf+i7085d7dmNKufNaZh1AwOsWuURsSvVG6VMUtPgyWlWtSoidycqWJ2k6nMWvb2wTqmfQSPWTxcn/u+i/rJS8Gw0fbNsRqKT87Jmf/+tG8ecIcL93LamO/s3Z6lUOkArZsFwvWqsx8eT1pxs4irXS84gBDCexg4KWjGOANJeL1GrD49T7gKHdTNwsFSOsGu4lceWcOKS0BTnMZGyk2Zl9trEz4ToIl5bAClMZLu57gnvGKaEjJ4LbCFgzY2uzFffEFlxvlu7H+ErRzCoLmHnBqwSLUT8rvbkRMmqvF2mIiNPQkcTVXn0ycBMtVwlqEPYnTIKa2LVYUKGtwU7+XXOQ67jUQoTMvgc6pGwh9AScXfeF6i0Wv7ZDQ/fq1XTNlyEQH/3WgXfmRQteoJXT5FvRF30TScQBWqIAtmbEFw0pwizV/4Ke7KaAltWi3+gUgjwBrFPYUYw592YKT+NSF2HaCgsVtwLrfYvs69jpghROFNy/ffsCZtW4DzxbWwosrkxZ3YsJn8JVLZdWjbbSCqWGCq/nsbljbHrBaJktjljbDoDVreG+KrQNMTReLz/OcvhRyNBes11lfA2lvR29vbwYr8sna365MmTdVi8c1l/BWi8rzAKrWEhAOJhUaLKWK5iyaDbvdhgrheJ/ud2CU17s5vYUfmRSoQea6jXrYSasqtnAZTYmUfvBsDEyWp5cutc/cxVVOuv6Rswg7kVu/mWXFGC7HFvC6uCzGsyaLFVQruA+GZFrParHW0CxAhDeNzZHJkuELwi5ndGbssHkDgcndCKdXsPQNTqZ2jBH6fZjpVcgAKyT7fDrT2mq3hqPvbkdMHF4w9kblibaui89Svz2YrLcIB9IKa3DLq8tWzng7MNldtrne2F2od3jL3tD3/nInGtHtW4lEV3/p53jqwJFJq1bHtrd33BXT34lizO9fy016r/yk3yAThCgy7xTZggLy1kC9ZQJUe0gGZckNUAkGB3I0cdJkQBPYXHFYYMAQsEardkQAdlve2d1dXV3ODUDLPrgDngzBZxdiMEZxy+vejq7Y3FyKn8709RWD/f++cll7xmiC2GzIa9NnIA8IVt9gshxmv4aNX1SB1kPetVQebtW+dV60GlR1gNKhJ/Po1la212u60kEK2mK4ftRA9MZvXCnlPotO4X4pb8YIr9i0mda1MsQJa2LQBwWz1h9NfJJYj7hblXfKQvmFyfcRbjeo7/C0C2fe5+/jUi2Na7u/3ZrizIhP6CtEvicTsXy5qUkLqDbh+GjODxVQc3BgK+c27g92JGQW0ks4D/fl+g2TMkVWsUPuJJfByltwj5MYoyyWY4zZTLFaArnSlaxr/r6+TJwbaWhpyO4MDZnkrWgcsk3klcqZ5XsWi2NiEMLyhaBasT1pZX+wDfXY3ZTJNLa1Nbx8fOsyZ87q3rzTKabuiZysLyFGF3FRn01aLL5BbA9cmJSClwXz/zUPnfyffZnE5o5ZC3wR8d4CJ9oMWAqsrkJNkRxKOvZH2vNjpXHKqlXSVofwci2bzW6Etgd/dZq1bDvW1JKkVzulxT5qB6wWB7jtRbFqjOXwFmvOav1b4vYUx5mVTnC4EimR98Oq0QFrvW9iMOkGv7VeLLJGbQU1+xKQTpgmkIbbvlXI/hVrICL3Qx4FtJBI1dc76q2skXphQi9ncSRumdY/gUJI+o10CKxN3ck5rNuQNuJV6x0XTFvvcIDjJq/820xWcAZ1QRIPgZVtuVwO3BZowaYc9RfKarU6LAKw/mbuZ9/gyXgKa6uEtcn55ddPrdtDE756uMkXi4peC6w/mfyRRjynaJq1VbKqf/rm0qVLsdfbgwnQLWj2onTLaiHKqpx98F6FEM42L5ODsGpqtGd0pqej4zVYMiSOF0SqwVodvsSt30QzWjqVtPK3MpEPuGx6tH02LuKaiOC3kCZfmGIZry9x49/aOuwmotJ6ljsAK4+3x/40/TOf7vN/70gmBpMQlC8O15GcuP3uHD48AAfyKZyyH1b9uqsr9nY6Pt/Xt+Zz+CYgTEHtc0G4vuTgjYdmg3IsEVu4Jyr7g7E829rqX4yPeBobX+Yc9b4EOK7jYnQL7jo4FDFWJDdTIIWqnVfKK1oWjFPN/r43kUxjS3ZsL1dfX4+O66O0phPD2dkLdoyAWiE0KfpTErOFV9JKeROPSQGUujidabu6pNp2gpAwbicGE0la3VrOR8P1+G0BE759HiZMhX5WH+GUfbUshONMQ0P26tVMQVbVresOH9zyoSGMypgqmysWpluoyyEyXfl1ytzqphyWDQUQyxYOY4vzyIV7S8Wle3ROmNrty/kcju3E0EQSXn0mwzp8cFLgxdBwy8Sm+gFWTlv5WrZVmDH+oaoFVcZ+C/iz8H4AFIrKTUDJIE03UxAVX5KDt0Ct/Ll9OIIxaF2phLVVLOIJwGoUmgUOjJTQNDCbFk7nQ1SocPhziUvluHh+uXJJLR3X2CTX7k5a8fZPYFymJUQDxD/qP4YdjqI24sPT0NNe+WnKGGVxzqJUrj97UFS1+29BaP5AuYYYLjO/j9azz8FCnRVRh64kukWT58YeITjsjC4Pdwyuqspq1DeA6oSyYahCOQMpPbKeGvDglSebCuGdF/LpHmjHCv20jeNUa5NV21ZuAIIx1PyDDBdh6z/CkPUD0H6HnqysKzhj56I+ccmJrYH9Yekw9dq27gygv21DZIY0w+f7GFRdp6DUoaGV4XVZG2RzIagUFh9ZHg2rluH6JnNUvROUl/rvB+sVQJE08WR7U+aMpcAvCpfGqBNViyKrz3YGBhxUM8g7Abx6WNYC9DGY9Q4rkk4g6cqdnaiiVQjOC/0EUydz29OIqi5sDUzmoPKoz1FeBmwQg9orGX311Lep8SYp6FBi+86dfq94gcrcRyufEpbydu+iOUOI8m1P0OID8TaL0bRiKgkGX/gNmMkJuDUQyie272y/71bocJ9P8sloLEU+tUBNVOju3xsYQBrfns4xlNT5ygUTCF8C3x5MbG9vT/rWkfQTfuQdYVnjqbSqvYAsRHcmJ3M5GnIgRGO7F3S9T6heJ6Cy2vblJn/BpRs4Tv+Erk9DS9sap6NlvKouC5u7e3fuDAyAUVu3Mb06jDUxuDI5ube76ZXYgE72mYg4UOZTwLLE9LS0hmo1KSy86H/vY/lQ0qEz6rDAeuO36GUZB4dRHyWlG/yJIhQVjfY0kcoglanE49470DRKDg0abqtRQ52MY9Q+OyH008tqy5tAx7HKsoJLp9DhiJxIvHcwA8RHJuVBCjbd+vXcVq89kxBRPglTg8XFvEU2c4snbChi9x1MNYC2wl+TQ79OnXzhTyGEiJpuj2fVli0vF0g6o5MO1s9c5rXJodtT59bZchZhMw7YKMbjlKqIxlw8rQdAO3xzEvBor7oOmxzEYeCfMg4dIwjAPmHxaFRO0u8vFLcAAAGDSURBVGZaGVmB9sJzWwNUt0kfy5sc24O3L3OfLSzHZtzI2NTZtyg4Vq+gVF5KjR097/z9AKuANEs+x45gk4TQgdYHtYvmqxREcSx15NJMPPfHAQftZaa0nz8rx1IMHIJsALNaRiLq4qLKHdda4ZW/5XxY3SahBpq48e4ztuByIfSRpoIiOSH28oXUGK+kVbpIzDFHyds5zZIhceLOsPLABQodxLmQlomiyvDHWIFLj6VFLXc/MoHHYeGRbVbdTtwweQzI+QltB429SXPpN/dEaSxVoCPEuGNRtQNpKgVtvl/F/UtdfcaCszhF1KzIiadujeH96P7F5xt4dFu5kE5vM8Spz9DgP+yj5elsjujk5Lo4VZZvfPaihxatyKfVLF0caHOdzs/7T0FlyaPx96mNmCWS1L9P/gD7z0XYnF/2BOYDqg/CZkQ7jYln/xFS0iv/QYOSCP18RN4YGPEfgluVqlSlKlWpSlWqUpWqVKUqValKVapSlapUpSpVqUpVqvJ5yv8BQgMen2oBfsgAAAAASUVORK5CYII="
          loading="eager"
          className="faq-image"
        />
        <img
          alt="pastedImage"
          src="/external/pastedimage-2uj-200w.png"
          className="faq-pasted-image"
        />
        <span className="faq-text08">Questions</span>
        <span className="faq-text09">Answers</span>
        <span className="faq-text10">Frequent Questions</span>
        <h1 className="faq-text11">FAQ</h1>
        <div className="faq-container2"></div>
      </div>
      <style jsx>
        {`
          .faq-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .faq-navbar-interactive {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: #74d1fd;
          }
          .faq-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .faq-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .faq-text {
            font-family: 'AnandaBlackPersonalUse-Regular';
          }
          .faq-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .faq-link {
            text-decoration: none;
          }
          .faq-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-link4 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .faq-burger-menu {
            display: none;
          }
          .faq-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .faq-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .faq-logo {
            height: 2rem;
          }
          .faq-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .faq-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .faq-buttons {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .faq-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .faq-image {
            width: 1895px;
            height: 446px;
            object-fit: cover;
          }
          .faq-pasted-image {
            left: 930px;
            width: 77px;
            bottom: 2px;
            height: 347px;
            position: absolute;
          }
          .faq-text08 {
            top: 686px;
            left: 684px;
            position: absolute;
            font-size: 30px;
            font-family: 'Verdana';
            text-decoration: underline;
          }
          .faq-text09 {
            top: 689px;
            left: 1041px;
            position: absolute;
            font-size: 30px;
            font-family: 'Verdana';
            text-decoration: underline;
          }
          .faq-text10 {
            top: 570px;
            left: 686px;
            position: absolute;
            font-size: 80px;
            font-family: 'Oswald';
            text-decoration: underline;
          }
          .faq-text11 {
            top: -18px;
            left: 1437px;
            width: 154px;
            height: 118px;
            position: absolute;
            font-size: 8em;
            font-family: 'Botanity';
          }
          .faq-container2 {
            flex: 0 0 auto;
            left: -1px;
            width: 1865px;
            bottom: 436px;
            height: 0px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: #000000;
            border-style: solid;
            border-width: 2px;
            border-bottom-width: 3px;
          }
          @media (max-width: 1600px) {
            .faq-navbar-interactive {
              border-color: var(--dl-color-gray-black);
              border-width: 1px;
              border-bottom-width: 2px;
            }
            .faq-link {
              font-size: 28px;
            }
            .faq-link1 {
              font-size: 28px;
            }
            .faq-link2 {
              font-size: 28px;
            }
            .faq-link3 {
              font-size: 28px;
            }
            .faq-link4 {
              font-size: 28px;
            }
            .faq-image {
              width: 100%;
              height: 459px;
            }
            .faq-text08 {
              font-size: 30px;
              font-family: Verdana;
              text-decoration: underline;
            }
            .faq-text09 {
              font-size: 30px;
              font-family: Verdana;
              text-decoration: underline;
            }
          }
          @media (max-width: 1200px) {
            .faq-navbar-interactive {
              height: 160px;
              border-color: var(--dl-color-gray-black);
              border-width: 1.6px;
            }
            .faq-container1 {
              border-color: var(--dl-color-gray-black);
              border-style: solid;
              border-width: 2px;
            }
            .faq-text {
              font-size: 2.5em;
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .faq-text01 {
              font-family: AnandaBlackPersonalUse-Regular;
            }
            .faq-link {
              font-size: 27px;
              font-family: Oxygen;
            }
            .faq-link1 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .faq-link2 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .faq-link3 {
              font-size: 27px;
              font-family: Oxygen;
            }
            .faq-link4 {
              font-size: 27px;
              font-family: Oxygen;
            }
          }
          @media (max-width: 991px) {
            .faq-navbar-interactive {
              position: relative;
            }
            .faq-desktop-menu {
              display: none;
            }
            .faq-burger-menu {
              height: auto;
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .faq-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .faq-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .faq-text03 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text04 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text05 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text06 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .faq-text07 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .faq-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .faq-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default FAQ
