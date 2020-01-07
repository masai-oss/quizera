import React from "react";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

export default class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question_type: 1,
      question: "",
      marks: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      answer: ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const questionType = this.state.question_type;
    function questionDetails() {
      if (Number(questionType) === 1) {
        return (
          <div>
            <TextField
              id="outlined-full-width"
              label="Enter Option A"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option A"
              fullWidth
              name="option_1"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <TextField
              id="outlined-full-width"
              label="Enter Option B"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option B"
              fullWidth
              name="option_2"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <TextField
              id="outlined-full-width"
              label="Enter Option C"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option C"
              fullWidth
              name="option_3"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <TextField
              id="outlined-full-width"
              label="Enter Option D"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option D"
              name="option_4"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Answer</InputLabel>
              <Select
                native
                onChange={e => this.handleChange(e)}
                name="answer"
                style={{ marginBottom: 25 }}
              >
                <option value="">..</option>
                <option value={1}>A</option>
                <option value={2}>B</option>
                <option value={3}>C</option>
                <option value={4}>D</option>
              </Select>
            </FormControl>
          </div>
        );
      }
      if (Number(questionType) === 2) {
        return (
          <div>
            <TextField
              id="outlined-full-width"
              label="Enter Option D"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option A"
              fullWidth
              value="True"
              name="option_1"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <TextField
              id="outlined-full-width"
              label="Enter Option B"
              style={{ margin: 8, marginBottom: 25 }}
              placeholder="Option B"
              fullWidth
              name="option_2"
              value="False"
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
              onChange={e => this.handleChange(e)}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="age-native-simple">Answer</InputLabel>
              <Select
                native
                onChange={e => this.handleChange(e)}
                name="answer"
                style={{ marginBottom: 25 }}
              >
                <option value="">..</option>
                <option value={1}>True</option>
                <option value={2}>False</option>
              </Select>
            </FormControl>
          </div>
        );
      }
      if (Number(questionType) === 3) {
        return (
          <TextField
            id="outlined-full-width"
            label="Enter Anster"
            style={{ margin: 8, marginBottom: 25 }}
            placeholder="Enter Answer"
            fullWidth
            name="answer"
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            onChange={e => this.handleChange(e)}
          />
        );
      }
      return null;
    }
    return (
      <div>
        <div
          style={{
            marginLeft: "180px",
            marginRight: "200px",
            marginTop: "30px",
            padding: "20px"
          }}
        >
          <div style={{ margin: 5, textAlign: "center" }}>
            <Card style={{ margin: 5, padding: "20px" }}>
              <CardHeader
                style={{
                  backgroundColor: "#313F9F",
                  padding: 5,
                  color: "white",
                  marginBottom: 50
                }}
                className="rounded-pill text-center"
                title="Add Question"
              />
              <FormControl fullWidth>
                <InputLabel htmlFor="age-native-simple">
                  Question Type
                </InputLabel>
                <Select
                  native
                  onChange={e => this.handleChange(e)}
                  name="question_type"
                  id="age-native-simple"
                  style={{ marginBottom: 25 }}
                >
                  <option value={1}>MCQ</option>
                  <option value={2}>True or False </option>
                  <option value={3}>One Word</option>
                </Select>
              </FormControl>
              <TextField
                id="outlined-full-width"
                label="Enter Question"
                style={{ margin: 8, marginBottom: 25 }}
                placeholder="Enter Question"
                fullWidth
                name="question"
                // margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={e => this.handleChange(e)}
              />
              <TextField
                id="outlined-full-width"
                label="Enter Marks"
                style={{ margin: 8, marginBottom: 25 }}
                placeholder="Enter Marks"
                name="marks"
                type="number"
                fullWidth
                // margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
                onChange={e => this.handleChange(e)}
              />
              {questionDetails()}
              <div
                style={{
                  textAlign: "Center"
                }}
              >
                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: "#313F9F",
                    marginTop: "15px",
                    marginRight: "10px",
                    color: "white"
                  }}
                >
                  Next
                </Button>

                <Button
                  variant="contained"
                  type="submit"
                  style={{
                    backgroundColor: "#313F9F",
                    marginTop: "15px",
                    marginLeft: "10px",
                    color: "white"
                  }}
                >
                  Submit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
