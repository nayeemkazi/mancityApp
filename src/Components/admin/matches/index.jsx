import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

import AdminLayout from "../../../Hoc/AdminLayout";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../ui/misc";

class AdminMatches extends Component {
  state = {
    isloading: true,
    matches: [],
  };

  componentDidMount() {
    firebaseMatches
      .once("value")
      .then((snapshot) => {
        const matches = firebaseLooper(snapshot);

        this.setState({
          isloading: false,
          matches: reverseArray(matches),
        });
      })
      .catch();
  }
  render() {
    console.log(this.state);
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Match</TableCell>
                  <TableCell align="right">Result</TableCell>
                  <TableCell align="right">Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.matches
                  ? this.state.matches.map((match, i) => {
                      return (
                        <TableRow key={i}>
                          <TableCell align="right">{match.date}</TableCell>
                          <TableCell align="right">
                            <Link
                              to={`/admin_matches/edit_matches/${match.key}`}
                            >
                              {match.local}
                              <strong> - </strong>
                              {match.away}
                            </Link>
                          </TableCell>
                          <TableCell>
                            {match.final === "Yes" ? (
                              <span>
                                {match.resultLocal}
                                <strong> - </strong>
                                {match.resultAway}
                              </span>
                            ) : (
                              <strong> - </strong>
                              //   `${match.resultLocal} - ${match.resultAway}`
                            )}

                            {/* {match.resultLocal}
                            <strong> - </strong>
                            {match.resultAway} */}
                          </TableCell>
                          <TableCell>
                            {match.final === "Yes" ? (
                              <span className="matches_tag_red">Final</span>
                            ) : (
                              <span className="matches_tag_green">
                                Not played yet
                              </span>
                              //   `${match.resultLocal} - ${match.resultAway}`
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
          </Paper>
        </div>
        <div className="admin_progress">
          {this.state.isloading ? (
            <CircularProgress
              thickness={7}
              style={{
                color: "#98c5e9",
              }}
            />
          ) : null}
        </div>
      </AdminLayout>
    );
  }
}

export default AdminMatches;
