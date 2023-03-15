const nodemailer = require('nodemailer');

const sendEmail = (emailIds, subject, html, text)=>{

    const reqEmailString = emailIds.reduce( (acc,email)=>  acc +  (acc?", ":"") + (email),"");

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bidyut.sahoo73@gmail.com',
            pass: 'bvdzugavsbfiiiqe',

        }
    });
     
    let mailDetails = {
        from: 'bidyut.sahoo73@gmail.com',
        to: reqEmailString,
        subject: subject,
        attachments : [
            {
                filrname: 'testFil.jpg',
                path: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFhUXGBcWFRcVFxUXFRYWGBcYGBYYFxcYHSggGB0lHRgXIjEhJSkrLi8uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA/EAABAwIEAwYDBgUDAwUAAAABAgMRAAQFEiExBkFREyJhcYGRMqGxBxQjQsHRM1JykvCy4fEVgsIkU2Jjov/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EADQRAAEDAgQDBwMEAQUAAAAAAAEAAhEDIQQSMUFRcfATImGBkaGxFMHxBTLR4UIjYnKSov/aAAwDAQACEQMRAD8A5SE16lFTpbqZtmpC9eqAhkt1Ilmjm7ajGrSlGqAmBqVJt6lTbGnTdlRTdiKScQAmBoVfFpW33SrImyr37jQfUprWBVg2leC0mrK5ZxW9vhs8q76i0o+yVZOGkitU2BTuP+Ku5w0JTNJHUkL06K8eVMp182iAUp0VfVYyakNjCoAHLc0+s7Rx5SghOyVK0Gx5DTr9aDtlrUoBSUg50pmACAZBHht9aa17pWOpDRKVMiSkQYHLbbrNeqs1DUjfbrRluwJMwBlV/pNM725RJSVDuhIG2kjSjNVAaRCrybaa9VYEbU3YZOaUlM+MUcGFJ0WnfY8qlfVLdEwUVWexI5V72J6Va+ybqJ9CAaT9WTsu+m8FWDaKNbCxinLzojQa1CrFENtkGCoq+ECTAGxPLef+01Qx73HRA6kGCSkzrJ2AmpDbKCQqCZ020BrMOxNpt1KlNlYG4JAmQRvrReIX7KiMpXrOaQAmeWUA7QKqaS0aJbezM3CywtkqELOU8idAa3uMME6ajry969bJLYbEFM5hoJkiND0qx4jY9k021BSojMUzPLrG+tTueSnMoS7r+ElZwAqAPLepH8AM7U5wB1SU5MwAIBBUnMB1Gh0mnSUFbja0Nq7MFSVk7TodY2ilucQ0FY6hUaZOnXyqYnBoG1aHD/Cr8/ZDmmD0kH6Gl97YQBCdQSZ568qidiSDBXMZmVROHVn3I9KsYbBjuxoB5nmalFpWHEkWRmkqx9y8K0VY+FWn7p4Vou0rhiigNMKoPWVAPWtXG4taU3VtVVKvKU5irDjNRdnTh9mhuxqxtSVOWqRCKJaRUaBRDdKcUYKJZRRzCKEZo9ipXlGCi2W6KbbqJmiW6lc4prStw1UnYit201O2hCgrMvKQJHielKkkwmtKXqak02sLHTaobG3k1YmbQghManQDzoHvJIaE2q8NEJbidioNEwNYI9xS5vhNRb+8EiNU5ecEb++lWHFXinMhcQlJAEiSZTG2+4rAh4IQM34RClZdZmOenjzNehSLGyCdrc9PHeUltRwYNBJ9vDxUOAcMhpOckFSh4wEnWKGueCLdEOBRbCVh1RBkd0zHe2Gp2q5WCAW0+CR9KrH2qPlGGuhJhSylA6wVAq+ST71YynmAy6qB2JfnJlcU4mv2VKCbcLCACFFSpKzPxaRAjlSNBJO5/wCNqb4ZgNxdrPYozAGJ2EjfWrfhH2W3Cv4hSn51eA1ggJLjUqHMVQ7V4pUDmP8AzXVuFrBi9ZC1LcSpPcUAQJISNtPEeOlL8X+ylTaMzbskcor37KMR7G5ctXQR2iSQOi0T66iR6Cp8S1rmkjUJtJ9SnvYq1K4NShezgCchBC0qCzPRSd+o2rbEuFkvOdq4pQJgd1KEpiDGhmSIGvjVxe2J30rRhIKYiN5HL5VCTDy308fQJgrv/cTdULibg23ZYdeQtwdm2VCQCCQDpyOpjyriZdUdP813Nds+1O5Wpy1skLIS8TnAgTCkpTMctVH0rZr7MbVKdSonrMfSrqBAbmIiUl5fUgTouFZTuRW7dyoHeu4L4CtspSE+tc64w4MVa/iIMo59RThWa4wgdhntEtMrzga6R97aQ6CpK1BIBGgcVog67iTrXT8Z4TWAhzvKWrIzlOsHLMJP8uka1wy3uFZ0CT8aI127w1FfSHGOKAMoUlYSsPJ2IkEJc10NS4xoa0+P29t1ThK78waD1t4qmWWEuNS05LagkhSTJzbEgZZBJGx8KsWC/hWpW64EtLBKTADgUVKz7GP96RW2JOOtLedXmWgEqJICpBghJjfwBG2lc+xnGnVrEKO20mBOsAf5NLpjtWCm06Ekn4GvxAm4V2MrAUg12sgwPtKut5j7TDpKNG1aJG5g6EqKp13MVIMaCgT2gUkSMqgnNG41G+lct7VSjrNb9q4lWZJ86pOBoFsFoXmnGPmV021fQ6CpGhG6eY8fKmDCJFc2w7ElNwUkpPzJ/aunW5QUtrSoELQlRj8pI1SfEGvDxmFdQPhsvRpYhtZvitVM1CtqmS249pod1NeeHIC5J7luk943VguRSe8TVlFxlCSq9cooPLTK5FBRXqMNkkqNFEN0Omp0UZS0YzRrBoBo0ayameEYTJo0U0qgmTR1uRzqRwTAUUh3LBFTWlkt0KUIhO/10qIlBSddeX6UywVQhadQSOVLs3VODy1pcNbdekou1sFJQFkd0+/hRxXEEnnlkmIIClAzy2ikuNcRot2g0JW4DJQNkgE6qPLypI9xcktLPbNhR1yBsmNIjMTv6U7DYKpVIfTBiBcxrv5SlvqSCX8TzhOLd1yHXXFEqJUkEmcihm1jkZygf1aU4bwx6W3woFGRSSMxmSpOpnQ7GqVdcTodCQjItWhVAKSTEevKug4OtpaU/jSkgEomIVoogg7aHeqfpqlMkPHnstq4hrmhzfMRoI0EJWcafTc/dkKSlATI7oJ0A6mqv9qd5cgttOElo5VpJQEjMUGQFAaxO1dEucKt1voebKQrZcGe5BgxyOlK/tGs0vMZS6g9kUOJb0zHKQFnNOvcKoECqsOMroJmCN1K97HQGtuQZtefTX7IHgHDOytG9IKpWdNpJj5RVrZcA51WMXsXXcoSpQZj8pKYgGJywSZgbwN4obhWwuEOoStxakkd4KJOUwSQCdx407/d7Iy3bYD4Vsvr9lv+I4hE7ZiBPlXP+JsJLN6xfMAFPaIKinUCSArzBBNODw6pT+dSc3fgkqXIb1kJIUClUx4eHVrcYV2VuUE5x3SdhMKSeXMxXNNwfVYWgd308evFWF+3IMyFSNB41shtUCQRPhUltdBbSFlMFUmNTEE0W1KkgkzPlFd9JJLwTB5++6jc5zbOGlutlyvjCznGbZxZhtFuVqJ2AbUsk+6k+4qxWnFVq8oNtLWVeLawP7oijeIcLKnkkHXsHEJJEwVLbJP/AOR7VWLTht5L0pWoDuDUySQO+T5mCI0FcxpDADYgcU+kAQDKcYxjTNuQl0kSJGVC1e+UaUkx3s7y1dDUlWUkApKTpzAI1FMMcsHXVFIJAAIEfzQchPhO9PMCwxTTYStWbuic2+bLCo8CZ0oS2RI68k4vyar5vwPDi5dMNASVPNpjzWJ+U105nhJLwuXgO+h9c96BlCQrbmZJo7hrh1lGJOuhIKkPnskkGEgqEkeIzECdop/d2TKEqQ0tSu0dKlgHmUwQY5aDQ0OLqgi3WiHDMNNw8Y9L69fC5yy1naU0CdVqVv3QElXePuB4SapWLT2hT00nTWNjppXZuJbHsn3EFACVWsgJI0OZU5jp4bVxO5WFLPWfCn4OkW05Ign8JeMrio4ZdICd8KYR27gSdQN67Bh3CtqlAHZIOmsgGq3wbgCmGO0V8ShPhtpRDWJFS1IDr6ikgLU3o22SYAIAgCdNZrnuLjbRG1ga0Tr1ZWhnhe2AKexRB3EClNtgHYnsW9YUuJ6ZidSegimd3ioat0FZWVqUltMaFSjzUoDujqQKMeBShLkZVGQRmzERIPek5gYmfGvK/UZNIO2mTy0+6ZSqFryN4hJrlyTABECIPUUI7RtyxEHrrQLwrxbzdNtFkBc0lvKcXNJryrKKxJrqgKNu6Br1aeiWVompUVCmpUUxyWimjRzJpe2aMZNIeiCZMmmDDU0tYVRzDpB0qV0DVEJ2TRmxnKdd4Pl1qHi/Fm7JiUfxVHKjX4YGqiP83qZjECj8szB+VUL7S7wuPo5AI0Hr/tTMPTp1aoaRPHyCx5qNYXE2H8oPA8Hu73OtJkA95R5k6+ppy39n9zuTrBPrVl4Fxplhlm3KAFLSlUpUFKlQBladxvymrNiWMoZIBT5qUoIbT/Uo/QV7bqrgYCU2kD+4SVw5IctXdRCkkjUVdcE4jBUlyUpgjMkbk7HTfb0o/jjCk3LXbtJTnGstHMhafOBqOlU7h5IUFJiSBOm+nnp/nKscWvbfkVzGupvgb6SuyWhU4+gtplCh8YUIICTyG+1S4/ha1OqSEyS2Cnp3RlVPuD6UPw1c9m2wg7dotA01H4WbT5+9WL7/ADddkUkns5ERBka15+GZAIA1cPQyFRUqPZV7uzT8pLgWJAICFbjukeI0PzFTYnjCWChYTIKspMgRPODvSDiBP3a9jZLgCvAKOi49dfUUpvWS6pbvaIyIVH4gUpCRAM5UqHUjeqoIdBWDK8ZhqVecNxpDoUsZdzoDM+PhXj17mWG985AjnuKptnaNlo3CHknJ/wC22W0EiNNSSaOwe9L14FtahAzQdOWg89/Y9KB1jOwXANAOk7cF0wsgZQBoBAohuKDs74LGogjcUUHBVrarXAEGy8t7XCxSTiZ/sy2vkcyJ8TCgPYH2pFiXEiGMilkQSBuJBOxjc/pT7jOxU/aOJR8aYcb8VIMx6iR61x9DHbLN044hCQoZc6VKSgJAGwUIMzrSaje/M/lWYYhzIi4+F0bDsdbezLbjKDEyDPXTdMeNMjf6eFc0GErLarq3eaVBzyyFJSuPiBlSgZg7RW2IcRrcUltue9p5nrSHh2jSn5W/5aq98FshyXpmXHDpyBUqNvT2FFvYQlhLjmae/m211EQaP4RbQm1aSkbJgnqQSDJ86DvsYQhi6WfiQpSdBIKlCEn/AH8K6o1sAcZ9hPypg6o6oYGhAjzhcP4rxpxx51YcVCsyRqZyA6DXl4UEMJbcShxrYiZnnr/nnSPFXCVrG8LVB6jMae8HXxQlxtQlJSSOoV0HmfbfrVLQRTGXqVuZpqkPFviNF17hy5Qq2bB3CQCKnawxhvOpKYzd5QEwo76jnVK4dxXuhKtCND586tpvj2ZKU5z/ACggE+p0qUuMwrezBAITTDn2ngpJCVQQYMHyNTYk3zHhp6fKq7wrdPuOqSLcNpM5iQSdOWbYmrc5adwiSSSTJ+g8KlxtI1KeXz9Euu3sKgB9JlVh+edAPU4uLYgkk0quE714IY5tijzA6JVdUmvKdXVJLuraKEpLdUFRt1QVerT0Syok1Kmok1IimOQolqimjQiKJaNIeuTFk0Yg0AwaaWzYNTuaTomAgaolhR2jlXPeM7oLdMA92Rr4bacq6glKW0KWeQ0HMnkK5FjYPaKCviKlFXPUn/mq/wBPpEVMzuFkvEVAaZAXXbPg1IDELgIAUYAkqyJBJPMaadKd4rgyX1aRInLIBTqnLMdROnjVV4V4iS7YgvrIDaChxQJB7ggGR1Ea034a4gs3FEMvSs65SomY5gE9OlWuJnkVrGnLI3CbYJwum2aKSqc2pGydo0Hjua5livDjls++6klKQSURsQpQ0keCjpXUncQWs5RQ2JYMVqbbcJyOPAkjdQbSpwI30Ep19etL7TvHL5pgZlH+ofEDktG28qrcDYPrHnLKqsTVor73235UtAeZIIigLXDy45IIhq4KleXYxA9VCrE+JB6AfSupjLmI8vK6TXqd6PC/mqLxzaBxMFRmStKtykxAMjkToRy9K5tYY69buKBTmnRQ8DzjYiNiK7TiVilxtIOhjQxtPUcx4VzbH8DQtRSoZHUncc52I2BB3ikU6pYYOnx904Uw9oym4S+84hefb7FptSQTJnYaRTLDG3GMiWT3woLUrmooBmPeAKGwvDVI0USfLY+VWfC7KH2ugBJ9Zj6UT6maw0TG0sgLjcq6YXdouEBxPdcHxAdevkaOUs5ZA1GkVW2Wyh8OoVl1hYPwqSTr609XfpGo9utLZUGUzY/Pj/KlrU4cI0+PDlwUBxQDMDOmonkfCudcdIWw7/6UDI4MzqNI7Se+UzsDI0qzYrfIduENoCkx+Is/lKE8p5akD1qofaE+5+CW0qVqsQASqTBBga6waGjUe50SCE4U2NvoYuoLHHrlLPYZW0JgidDAk7AedEYFaJbBKZKjpmO58B0FA8P8NXl1MNqRlAP4iHEgzOg7up0+dWVuw+5qSl9xOYkAJAVpPiR0pz56lMp5ZgXPXBW7h5RabCTtBO/l+9J12yh96B2LjRjkQQ5R2GOrUpEIOWO8rlyP1pne2pgpA+PL/cmSPqaEkubp1CQHBlSeMfK+Z8dbCLhwAaJWrT/uJinXALIcfIJUCUEgJIBJkaCQQTE7g+VRcbYOpl9wK3K16xGuaY3M6EUswq1dzw3IUnvA6gggiIq5hDqamqgtqnrVXR/By0tIWpDaiSkZVDvlMSrID3UzIG20abVZ8AsHyrJKeusjT51z3FsTcLza1pDhaSEFC1LUCpM5iZPM6kCAY8a6RwLjz9wy866lKUIhCMqcsEiSB4BMe4pNRhIBVNKtlaR191a7V5LYAGp1Csu3mk1Mq+70a6+NVzCLmAG5kpJB85mPnTUp7wNTvf3bLXUxMlZe0hvDqaeXSp2pHe14da5XU7JRdGkt2ac3dJbynUEZSa6NBUZc0DNepT0Syo0mpUGoEmpU00oUSg0S1QqKJapL1oTC3ptY70ot6c2VIAutJTxlKyO7EyN9v88aqnG3CinUm5aA7RIUp1A1zJTAlPiIJ5TPhVmQ8QnemPD7gcbSTz7RB9FKr0KTssAJTm90z1uuTcIYqG4bWBlUSlU9STAUD6irlhOEsMLLobbSROUpnSek7aaetDcR8Gled9jVZSC4jKDJCYzIPI75hzifNQnBLpCUh53I2dpVv4AbmnVCTdp1T8MSBlImCR6WV2wbGUKfCRqZ5bDxJ5VcUXSbhbaYHcUVGRP5FJgdD3t/Mc65TcWrbTMMKV2kpOgUk6HXUxXQ/s8cdXaZnE5e8QlUd5YHNR3Os6mktYWgp2LpEM7V1jpw13VrbSAIAgeGleuqASR4Uvdu1TAMa6eNc0xRC37pYavXyVqJytlWREaROYAARvWtqBwgDWy83snT7q/X94AkmeUjwjUmelVi+xeydyqUtRI6ZBvuDM6VNa4A4LZxhLqnHnElJW4pRGuhAmcqYnzpar7Psn8e+Yb8lH/yCaM4MADMbr1MK3ChpNepl4Aa+gBShriANrUEo7kmATseRB8or1zitwkEJSCCD12/7hTVvAcJb/i4iHDz7OD/AKc9O8T4dw2za7Zxp11MpSAFAklQJHNAjSmCjSAsF6P1P6cHBopucTYWdflmIk8lTLjim4XEEaGe6nn6zQ7mPXat3Vekj6CukcQM2tix2qLFlw5kohQECQTKlKCunTWa04K4iVdqchhpkJSCOzBBkkjUwOnSiFNkxlHohH6hRFE16WGlg3JYOA4OOpCoDOH37uqW3lzzCXSCPOrdwuzi7DZaSygpJKvxiQUqMTELBIO8GneEYu69d3bK1AtskhAygEQ4RqfzevSlNtiCV4k+3cXC0oQpQZbU8pDJUCBBEgbTCTodelFta3spsVjqtZjqTqLA1rQ8jvGxiIylt+9fS0pwlrFTBcetGxzASuY6SrN9aUcXWNq84blV6hBQgISgFCsy051JRIVoTrpHI0x4g4vbtgEMlDrpI/DQrRKeZUUfCToBv5URxRgwum4EJd0IKh6wojcjUTyk0JiJn7rz8K6oyrTqkdm10gFrRpYO1knn6bqTh9yUj0p7cokVTeE3HEgJdIzJJBjmQTVzDgIqYkRCjggrkv2jYCkqzIdC33HMxbOmRACp25bCarFjw9fJhwW7mUDYjvR5b113iC2Sh9u4gSUlufXMn/yo61ekVjXiMqriWh+v9LhbHDd3c3AaDRQpRKsywQEjdSjpqB+wrrDmF/c7cMNmW4SpJVuFFaUuE+efNVpkAbf50pRxQ4QzI3KVR5jKofSjeczYU/8AlIVA4evM1w6omJWuOhAWpAPnAB9av6VSARXDbHGuzWoHQhSgf7pPzrs+ArU40CmPM/tzpb6RmPRVZg5k8FEpcBQ5jf6fpSm6NOcUahQPMiD5jX96TXVeJimw5N1vxSq7pHeU9u6RXtdQWFJbmgqNuaDr1maJTlAipkVEmpkCmOQqdui2qFRRLVIcjCPtxTBN0ECTrQFvRBQmZVqNNKTuuhPrFztGc8RM6eRI/SjODQoJUDsl9UeRQCfmaGZQrKIgADQDaIqXhB5SkXCTuh7SOgQg786sZEdcQln9sePzKe20pfjxcA8yoKHy/WqNxrh7rF4sjVKwFoUokkJOikJn4QFA6DqKvF4Qh5K9f4iFeih2Rn3NT8X4KLu3OUfioBLR5nqieihp5xVQEEx1smYXENpVWudpcHme9PlmE+ErjdxeqPdKgJIGYDQTp7Cu14fZusNoQ2RlQkJSmdCAOfUmvn65cIVqNQdiI1B2I866/wAE4i842p0uFbZVCUnUJG/pGo9DU2IMAEz5FehjXGodrbFWPEb5KmVqiCkElJ+JKgCYqp4VgK0WTl394WgKbU4ENd0kiUpK3CM2+sD3qyYic4zCAqPcdD1FetW/bYc5bsxnDam8gI0UFZ0p8MwiDtrW4d2fMN41XmZuygWgkTIBgeYPhcXsir+wectW0MrKHfwFZySkjKgFZMAlU8xBmdaU4252BSq9tGrnOcgeZQEOlfJCkq3J5QoDQ6ClGEDFLhP3R3tA1mGd1YWlxLYOqe13WCOWp8Ypxi+OsvXtratkLCLhDi1AynOJCUA/mjWfMCrHJtPDPpVRTMGMzjkNwI1zDTwB32ul32gYNastNuISW3CsJSkbKESvMJMFM7jrFOePrRTluhlvVSn20JG0ns3IpL9qLZKrZR+Dvpk7A5gT8o9qk494iZdaQm2ezuB0uS0FSmEqAUFQNZPI1p4KvDitVbhHSXHM8yZMQQBO8W34qy21oU2hZvHELCWylxeuUNgaEqVqVJ/mgbDnQ/CuCMW4W5bvF1DoTlPdI0KphSdDy0jSK5Ji/E927+G864tIjRRyJJ8QkAHzM1a+BcVuGkLS0wHJUlSu0XkKF5dSRsqRl2/lG9CarGyXGI65Ia36diaWHqDtGgk3aIa3XYmIIMWFoVh4SM3mIK/+0j3cX+1LHv8AphuLj72T2qrl2IDgSEBZCcxCSNTmNS4ezeMKeWlbKS8rOuUqWQcyiAkGAPjOp8KS3tjbhSnHrlJWokq7yE6kye7JPM6DpUgx1GwBmOAJ+E1hpiu93aloLWAFhvIa0ETpEjiPRXzDMBs0IDtsy0vYtnOpaCeoX3gD6UvxxjEUh24LzTLaUHuIzLMctVI1WSYnSqnhbjXfVauKBSUhSkFxMzMTBTOx5UPcX6y4WoUZUkrJUMp0kbCVfFz5is+sbUdkykc7e1yof9RtU1HHP/zEmOEFzgDw130Vp4UdOUZjJMSTuSdyfWatySeW1VrCWYSKd2zsHek1KkujZIIDiXgRJNlpxKkG3WSYyjOD0Kdf0+dLeF7orgHYanyH+fOh/tAxRKLVYCh3ilH9xE/Kan4Iays9oSCDOoIMhJjQ+Kv9NE27p2ThLaBlWRY+eppHxZJbEcgo/QfrTdp0qPnQuJQteQxokH3J/YU4mRPL5ClFnRz+Fx7izggozP22sklbfPUyVI/Ue3Sug/ZzcTboB3gU5vcOBTSjhwZFKT0UR864vdLQ5VBjC1xbumuLs5kqHPl58qrTp0HXnVpv+tVm/wBFedeXj2d5FSMthKbukd7Ty6NI72p6AutKS3NA0bdUFXrM0SnKNFTIqFFTopjliIQKIaodFEN0hyJGsUQ0Z33kUM0anQNj460ndG3VWlg6VtwoQl24B/M5A6fw0H9aTf8AVFD4Eg+fOmWDXBUl1X5kqSoe0fpFWUDdA+k4UiTpb5/mE/xdOZOhglpSR/UnVP1NN8Nuc7aSPzAH3AI+opDcXWdlKhyWPZUp19TU3DVx+Hl/lUpH9qiE/LLTp0Pl7fzmU+XuHyPncH2yeyov2q8O9k597bHccMOgflc5K8Ar6+dTfZXcOBsgGQCqUnbLM+8k10PFrZt5tbTglDgyqH0I6Ebg9QKp3DeDKtSpgkd1RUpZMBQJlJHpHzpOKPcjeR91Xhn52kO2Ht+Vd3LYFPd9qqasKdVeJ7J9bBUMpKCUmBJMiYV5HSrNbOtgR2iT5EGknECl/EhQn8sbjpB60lrgzvfEH8IKb3hxy8rjbzBCi4ywy9W8W03SiypIVBcWgJ/KQpKB3gTrr18KT2eBNslLirlLZQQUmUJhSdQRnPUDlFK7G2cvXHu1vHgGiAoBRUdidJOUcxr0NTXFxh9mYZbW88CZJBUZ/rXok/0j1rX1qpJDCeQA93HRVUsTUpU+zaYGhhrQDzMX5n1Vmbwlp89s4px+Z761zI1jKBGkjYQKJ4fbtbhsOtMiAop76EZtIMgkmNTU+A3Kn7VDi0ZFKDiikSQNSkQTOsJ+lK/s/wAQt2LfsFvJSsrUqHFFMghMd5UDWOR0qJ3aOY6STB4lTurvLcgJgbXiOWiSuOu3lwpDVozmCijOsFUISSMyjpA9+mtQ3eE4jalSpKExClshIbyiTyGYR4xVlGKtMPJsrKC665+M7ooIzmVGdc6wJgbD5VJ9pN6ptgNA/wAVShIMnIkSR75fn1prHEPa0NAB48OPhvH92AVHgxoDt4daeqSW3Danmg9c3DoBSV5VOGcu+ZZXOUR9RtWlthGHvhRZUSlEBepSIIPxBQBymNxVpum28QtFJQuM6QkxEoIIJSoaaSNuYqkXvDv3dQQl4KUoEOBCssAEQFJCjIM8+lCyo6qS1ziHTYDQDrkta6bOlN8NuWHEr7FvIlOVPwBMz8Ch1/PqYPgJra0twp9XOIHhokCocCtsqXfNGwHRzQTvRmHkB1UeH+kUVJobVcBw5rH/ALVaLeEiKHxPEUtiYJJ0AG5P0A6k6RWi7iBvVTvMT7VxSphtAJnqB/vy8q67nQnUaYNyguJnTcOM28x35UdxnUleQenP+o9K6NYgMMoaTshKU+cCJ8zqfWqPwnYFxwXDoAUklWXcgqGk+MEnzJNW1x+TVbT3co2TcSZy0xtc8/wmts7rQGL3YCnFc0pyg+QSf1VRVuqNetVziF7Ii4V/LnMDwBj9KK8ddawomAF/p8hPbDFwsQqlrqgi4JGyoV+h/T3qqYPjqHdUEyNSCII5e1NnHs5SZ1G36itcToVa2iASW6FW55WZM1WsWTBHr+lFsX8JymhMVVIBqbFd5spLGlpgpNdGkd4qnF2qkd4ahoBcUpuTQdFXJoSa9VgslFRoNTINCpVUyFUwhYEag0S2aBQqp0LpLgiTFpVElzSliHam7bal5UbdUR20Uw4bvodWg7KT8wf96QuLryxfyuoM8499KNsjRNc4OYWnRXyyJ7JxB37xHvnT8z8qm4evBmcSOeVwDlJTBj+350qsbyVT6Hz2/ao8Jucj+X/4qT/YoR8pqqnB9j1/2UbpvOsEfBJ/8D1V37YGgMTtku5VD407TqCOhHP/AJoP73UKb7UjxrajGuEHeyRTc5pzNKatP6bJ+YpHjmIpAIShRJ5IyqE+hn5Vs5c94gnunYdetDqu0k6AdNKSaOaxVNOpBlLuAkrDjqV/mRmiFJOYL19IUdatt7hzdykpX8UGFpJzp1IBBIkx46GqveICh+xI9DHKlarIJMg5T1SYPoRrQVMGXPzh0dc1xqtOs9ea6Zw7YLZsw04qVIS4CobEZ1lJ8JEH3rneGWaloGcQY8D9KZDjR9LYahpUDKVuZ1KUNdYBAB18aW2+IZRv4V2HouYXF+/DzQAEmETw40G763mP4gB00lQKRA9RVr+0i3R2CVKWhK0KltKjqoKEKCQdzoD6VQry7GYKzBKgQUwdQRsQPSldy69cO5yVrPNazJJ9dh4Vz6WZ4fOia5gLpTlFoFAK5xG5EjxjemVhg6CkFMp8vOoMOAAAVqYGnLxo3DFKSVJUqen66VtyYN5WkkNsdFK4h5pJDa0wYzSmTpMRrHM7zWto6sEqWoqUd1EJE+iQBUr7ieZpVd3gSDroKF7Q3QXQMBef6UvEWLkIKU7qEenP9qrC8TltLbYUZ7x1I22B5kDXboOlRXpcWoqC5B5dOlGcP2TalhStSiPKdf8AmtpMa0L0Kb2svwV8wJoMsJSRBIzH+o/tRbLvemdKXquYR50Oi7p5pxCg7Vzy5x1JVoRc1WOKn5YfI/Mg/MxS3E+Kwz3UJzK6nRI/U1X7niBTiFJVzEQNtwf0oCe8OuCpoYOo7vGw945LzBHkRkW2UIIGYJiVZBOp3AJ9/cVbcKQntRLmhGYNjYJ2He9OtUNltRBMn6UZh7zyVZ0rk7d4SNfKDTntkSqqmGLf2fZXy4vUpdUiCcp0PWUhX0MelDv3xX4DpSeyfVqpZzKJknboNvIVI497V5+JqBwygKdzgABF1vdO0lu10XcO0ruV0mkxIcUJcKoPNUj6qHzV6DRZKJUKV1KldBhVSJVTi1ACjUuVMhygErqRLlLLUUo8O1Ip6l4dr0u0OREHItT1QLdgzzGtRFyolrrQyCtlWy2vp7w5gHyIj/PSsdvIeSoHTMFf3DKarlhcbDzH7UTcvSAekj9R9KYxuUoSVcDe1C7dTqNxSRNzXouKeQHC6nEhNHrslOm42/alicT8a0XcQaBvrZKzMweo50sthNpuA1TBWJk86iXe6SVAetV24s1jY5h4b0MHiNCDHOuyym5gFZGbjtNUJKh1PdTRaWlqSUkgGZGXT5nyoHDHAGkgeJ9zRKngedZoUBcVMbBudtSNyZ1pgwAnQbafKlhuR1rw3sc6CBN1xLiITsXAr03oO24pCb+fColXg66/WsMaLg0nVOn7+k93c5zlnzoV+8nat7VI50GQkymghoTJhsJTHXQ/rXmBKKGxm3Jn05D2ob7xyPL/ACa1afow3ZDmJVmfvJA1qBV1ANJ13UCK0XcaGmuuUpohL8UdldCJVWXC5V1r0srAkiB40vKvY7YNaJKKbUo8/nFG24IjWd5g+xoBpspEmpmnIO/+cqwkgaqKrW7QyJjrbRPGnhXq36Wh3SvC7UbmJUop56gH3KxxyhHV0bGLCVE8uh5r1xVQ5qraEolQBVbBVZWU4rFuFVuF1lZQkLgtwuszVlZQwiC8Kq8KqysrYWrwORWzT51FZWVqMXCZsPaCt+1rKyjGinOq8UutA7yPpXtZXOC1q1S7yNaOoB5VlZSwNkUxdDla0aRI5eFQG+Xyj51lZXQEUrw36uc/KtW7lRnWa9rKItAWTdeh41IHDWVlDCOVK0aIL8VlZXIVCX59dKmS5A8aysroXLO0rYLmsrKIBYVqh0BRgcv9z9ay7clEeIrKyuAuhfYSh5gkTvW3aa1lZSyjiFOl2ve1rKylQuUa3aHccrKytaAuQy11FmrKyngJa//Z"
            }
        ]
    };

    if(html){
        mailDetails.html=html;
    }

    if(text){
        mailDetails.text=text;
    }
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs'+err);
        } else {
            console.log('Email sent successfully');
        }
    });
}

module.exports={
    sendEmail
}