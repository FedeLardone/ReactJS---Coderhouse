export const CartWidget = () => {
    return (
    <>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACUCAMAAAAd373qAAAAZlBMVEX///8zMzMsLCxUVFTc3NwZGRkgICAkJCTz8/ODg4MnJycAAABra2uPj4/BwcHHx8f5+fmVlZVdXV1ISEg9PT04ODjk5OTOzs4NDQ2xsbGmpqbq6urV1dW6urpwcHBmZmZ4eHienp7UdcjhAAAGuElEQVR4nO2c7ZaqOgyGh8pnEUVFEFDB+7/J45iATalbzkiLrNXnZ2RpX2jaJA3+/FgsFovFYrFYLBaLxWKxWAwTpgPCdO5BjaduYyWsquce2jjC68lRwuL9MiRsuFrAnVM79+BGUb54BL/457lHN4aL91oB3809ujHkzWsJbD/36EZxbo7ZgCMoOLhzj24UabGR2VbwYI7l3IP7M6kPjpDMPZC/0zwWWX5dxpagojqBIxRzD+TPnGGbCJbrCPWK/SrwkgVFeJQ08WBH2Lr6yLXengtGGyuNrHc6w5YiY7CraYR7h60+BfU1eB0wTYa/z/VJ2PkGFDjeRZ+Cy9GEglOlT4EL66lmfI3PIL1i9hZ4Mp2HSJ+gYkat+C3MV12sd9PfwY94ZbGVgJDDySr6CTw0fqXWhMFQL/Q7Grh4rTPw2oAjnDaDT+oYFEhL4f4xKF+KZ6vHisClskF4wD1/6lGTH4EdgSsSNVDgSEGTUkF6e2zuQRsScw5fEWh05DvwoB1/+AnkP0xKo5UKwsiHm00jiDKGuaVxR/v9FdgRgqGzwRQIpCmgVIA74+lGFYCVaS5J5Sflre5/P2ipVakg3z8Wo5M04xjM0GjiIcs4sIw0gw+Sx9MJrnRuKxW48Lyk9QDdgN2mHzQBpjA7DGIXWE55Q+eAUsEZnCmgE/6Ca4HuFHALvzOsWGzAD/e0GKNUUEC6mtGxrjncG935UwprzrBiUSizaKUCtdgMvridfswSTaDeOF1I4KQtTakA6rJ8TWai2233WkYt8qpikcMsdmhYplLQb2jkJlSgINaYHCBncARfvlc1bgjUrlQAq4EfkRl/RQV6Rk1G+qJiUUNBzKOLoUpBiFvHTvyGEL42GC7Tk9NXLKTHHbZwZ6kypQIcLIl/CtwjTBSj8HSByY6w82BukC1NpaA+wq5IBls6ptzg7ggZjkoqbkcY1pSiscsPtoKthATnmAjGbQuqjiaqafUa8jEu0SWgxOgojN2FbGj0WyP1QI0Vi9hMTbbUJsDxzJwz6qtYsJWZs4lUW+lOWsj0kfS+SHAU1pE2tBjZDX7BioWTHQgqqzPOlqEmvSnyEwyB7tmMWPh3IdwJ2nPe23LcfqNcuA7n4O55mZtg+cXYSS9WLBxqvT2iVppnKvbkEHMkIYgNIXE25gZ9xULqsYADZ3YQ1xOFAhdrY0JUkuNBr95KkQhWLKQeC4wWAjG0USjYoIJ8aBqWArVxVFUsNhAwxW8UdCmSMGOwfKDz6EMGo7gV+UkMkGMxaFUowOj8IJhwZbhqHTNlO/TGfq+OxbmgULBG9U8L+raijKaPFIu0NO5vhqU4hQK44Wz9tKAbHA26QddjEazF5Q/PRzyxbKhQgP4u3HB0g8zYWvpLt3KSRK1FWYJpqABbZHxh5cR1QZhXBjhj4YsEMgkfjGSooAYF3nPK1MHgqRhAWbG4YaYomIYKzjDe0zOAuMAOfzLbMxNGj4fAG3E9rRwYiqBqqOACfnB6TnoMdT3DDSddR6cYWFwgxIyFsGKooAIFfihdQzYIE5wV9R2sYsSCqqECPMd05G/ydJ8byNSwdPqt0GKOJxvx5aezdAqip6XtFp7OUEJeERtvxYUCl5Mlu54EC+jXpwnSGba/PS04ZzrLDUN1bnQ3+KXEHEE4k++qMPxfZ/oDC/gFb4x3jp2nrVjobAd5Qd9jMQ3m3aDvsZgGlhnMDTo2EzYbMb+aoYESGznuAY3/KR5LZmkkhuNTh0Ufc9sYX0ofVFiF36bhh8zVgttVLEyHAxMCO9hC3gpR8rLHYjEoKxaLInzVY7EcoGAr9xQtieW/FeLierr4t0L85b4Vgm2XcmvaksC3Qo5R8gG7Od8yLLro+COyGVeCfD1FosYPMy7HE/VYGK27Uy6TCDB7ckCpmwk6FFg251p2zuLgIzj34nlDw7pq1p8RLeLVf4vlPeeyqsrxW2talLeq/KL570Yr5vv8cB2poWgP3PPZKvqWDNtdBXAo4I9LmTcONGeyIPuOv47InT44YmPig+LEvmMv62mFfxgJmvdBmiMUveU3j2YB3wbsQpy382grXv8VOXZJFHhvT+ZbEkkZ7Ot6SUT+puZ9r1xGTk6MH8IqaP3/p4AenLx/ZvqpyP81vf83iz1J6/wvmEU58YP3taOSerKpJtl/sRemEX/f7RdywRH4V1QsC2FIY8p35dP1mfZ3GMdRBt3UjncjqnfpLu4O9uMZE2TC9p5qMsbjkeliWgYxZyyIj9/xBB5s2tXqWo4un6aX9WrVfoMTWywWi8VisVgsFsvM/AfdQ3jvP7nNjwAAAABJRU5ErkJggg==" height={25}/> 3
    </>
    );
};