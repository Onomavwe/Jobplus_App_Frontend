import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import TimerIcon from "@material-ui/icons/Timer";
import Controls from "../components/Controls/Controls";

import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.common.beta}`,
    backgroundColor: theme.palette.common.light,
    padding: "15px",
    borderRadius: "3px",
    boxShadow: `1px 2px 3px 1px ${theme.palette.common.elements}`,
    marginBottom: "20px",
  },
  header: {
    display: "grid",
    gridTemplateRows: "repeat(2, auto)",
    gridTemplateColumns: "repeat(2, auto)",
  },
  title: {
    gridRow: "1 / 2",
    gridColumn: "1 / 2",

    ...theme.fonts.extraBold,
    fontSize: "1.1rem",
    color: theme.palette.common.beta,
  },
  saved: {
    gridRow: "1 / 2",
    gridColumn: "2 / 3",
    justifySelf: "right",
    fontSize: "30px",
  },
  company: {
    gridRow: "2 / 3",
    gridColumn: "1 / 2",
    fontSize: "0.8rem",
    margin: 0,
    "& span": {
      color: theme.palette.common.beta,
    },
  },
  items: {
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "0.5rem",
    listStyle: "none",
    margin: "1.2rem 0",
    padding: 0,
    "& li": {
      display: "flex",
      "& svg": {
        fontSize: "20px",
        marginRight: "0.5rem",
      },
    },
    "& li:nth-of-type(2)": {
      justifySelf: "right",
    },
  },
  details: {
    fontSize: "0.9rem",
    marginBottom: 0,
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  cta: {
    fontSize: "0.9rem",
    textAlign: "right",
    display: "block",
    color: "inherit",
  },
  skills: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: "0",
    marginBottom: "20px",
    "& li": {
      backgroundColor: theme.palette.common.skills,
      padding: "7px 9px",
      fontSize: "14px",
      borderRadius: "16px",
      marginRight: "10px",
      marginBottom: "10px",
    },
  },
  apply: {
    marginBottom: "150px",
  },
}));

export default function Listing(props) {
  const classes = useStyles();
  const { detailed = false } = props;

  return (
    <>
      <div className={classes.root}>
        <header className={classes.header}>
          <Typography className={classes.title} variant="h1">
            Regulatory Affairs Senior Manager
          </Typography>
          <StarIcon className={classes.saved} />
          <p className={classes.company}>
            Posted by <span>Koco Media</span>
          </p>
        </header>

        <ul className={classes.items}>
          <li>
            <AttachMoneyIcon />
            <b>Salary negotiable</b>
          </li>
          <li>
            <LocationOnIcon />
            Heyes, <b>Uxbridge</b>
          </li>
          <li>
            <TimerIcon />
            Contract, full-time
          </li>
        </ul>

        {!detailed ? (
          <>
            <p className={classes.details}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, asperiores ullam minus at{" "}
              <b>
                <Link to="/listing-details">Read more...</Link>
              </b>
            </p>
            <Link className={classes.cta} to="/">
              Withdraw application
            </Link>
          </>
        ) : (
          <Controls.FormGroupCustom className={classes.button}>
            <Controls.ButtonCustom text="Apply Now" />
          </Controls.FormGroupCustom>
        )}
      </div>

      {detailed ? (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur voluptatibus laboriosam quae nobis dignissimos distinctio autem
            repudiandae eius! Accusantium ratione iusto officiis rem! Vel reprehenderit minima inventore recusandae quisquam. Molestiae distinctio
            rerum saepe molestias animi, et perspiciatis consequatur sequi totam quia voluptatum! Incidunt natus aperiam dicta id quam modi totam eos
            nam et. Rem ullam atque maxime saepe labore. At quis hic modi deserunt nesciunt ad! Voluptatem, quo. Corrupti voluptates eum, quas
            voluptate in quae sapiente hic doloremque magni excepturi nobis dolores, ratione laboriosam, velit debitis consequuntur rem reprehenderit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eum iusto distinctio obcaecati excepturi repellat sint assumenda tenetur!
            Eveniet quae eum quidem laudantium dicta, doloribus quia obcaecati molestiae debitis sed. Ab error nemo vitae eum assumenda, fuga nisi
            voluptas cum sed. Vel dolor adipisci voluptates sit illo earum doloribus esse provident laboriosam enim odit quo, magnam iste labore non
            similique.
          </p>

          <h3>Required skills</h3>

          <ul className={classes.skills}>
            <li>Html</li>
            <li>CSS</li>
            <li>Node</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>PHP</li>
            <li>C#</li>
            <li>Ruby</li>
            <li>Django</li>
            <li>Sass</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Next</li>
            <li>Redux</li>
          </ul>

          <div className={classes.apply}>
            <Controls.FormGroupCustom className={classes.button}>
              <Controls.ButtonCustom text="Apply Now" />
            </Controls.FormGroupCustom>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
