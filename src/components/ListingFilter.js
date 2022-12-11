import { makeStyles } from "@material-ui/styles";
import Filter from "./Filter";
import Listing from "./Listing";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr",
    gridGap: "1.2rem",
    ...theme.container,
    marginTop: "1.5rem",
    marginBottom: "2rem",
  },
  lblock: {
    gridRow: "1 / 2",
    gridColumn: "1 / 2",
  },
  rblock: {
    gridRow: "1 / 2",
    gridColumn: "2 / 3",
  },
}));

export default function ListingFilter(props) {
  const classes = useStyles();
  const { components } = props;

  const sectors = [
    { link: "/", name: "Technology", count: 34 },
    { link: "/", name: "Engineering", count: 208 },
    { link: "/", name: "Health", count: 63 },
  ];

  const location = [
    { link: "/", name: "Jobs in London", count: 234 },
    { link: "/", name: "Jobs in West Midlands", count: 60 },
    { link: "/", name: "Jobs in Yorkshire", count: 45 },
  ];

  return (
    <div className={classes.root}>
      Fi
      <div className={classes.lblock}>
        <Hidden smDown>
          <Filter title="Browse by sector" items={sectors} />
          <Filter title="Browse by location" items={location} />
        </Hidden>
      </div>
      <div className={classes.rblock}>{components.map((comp) => comp)}</div>
    </div>
  );
}
