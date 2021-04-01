import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Rating } from "@material-ui/lab";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ProductView(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let { data } = props;
  const history = useHistory();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let handelProductView = (data) => {
    console.log(data);
    history.push({
      pathname: "/productDetail",
      state: {
        data: data,
      },
    });
  };

  return (
    <Card className={classes.root} onClick={() => handelProductView(data)}>
      <CardMedia
        className={classes.media}
        image={data && data.pImages[0].imageUrl}
        title="Paella dish"
      />
      <CardContent>
        <h5>HP ProLiant DL 380 G7</h5>
        <Rating
          name="read-only"
          value={data && data.pRating}
          readOnly
          style={{ marginTop: "10px" }}
        />
        <h5 style={{ marginTop: "10px" }}>Price</h5>

        <h6 style={{ marginTop: "10px" }}>{`Rs ${
          data && data.pPrice
        } Only`}</h6>
      </CardContent>
    </Card>
  );
}
