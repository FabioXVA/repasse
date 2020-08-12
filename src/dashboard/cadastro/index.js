import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="R$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function BasicTextFields() {
  	const classes = useStyles();
	const [values, setValues] = React.useState({
	    textmask: '(1  )    -    ',
	    numberformat: '0,00',
	  });

	const handleChange = (event) => {
	    setValues({
	      ...values,
	      [event.target.name]: event.target.value,
	    });
  	};

  	const [value, setValue] = React.useState('Usado');

  	const handleChangeRadio = (event) => {
    	setValue(event.target.value);
  	};

 	return (
		<Container maxWidth="lg" >
			<form className={classes.root} noValidate autoComplete="off" >
				<TextField id="busca-produto" label="Nome do produto" type="search" fullWidth={true} />
				 <RadioGroup aria-label="tipo" name="tipo" value={value} onChange={handleChangeRadio} fullWidth={true}>
				    <FormControlLabel value="Usado" control={<Radio />} label="Usado" />
				    <FormControlLabel value="Novo" control={<Radio />} label="Novo" />
				</RadioGroup>
				<TextField label="Tempo de uso" fullWidth={true}/>
				
				<div>
				 	<FormControlLabel
				        control={<Checkbox onChange={handleChange} name="venda"  fullWidth={true}/>}
				        label="Venda"
				      /> <FormControlLabel
				        control={<Checkbox onChange={handleChange} name="venda"  fullWidth={true}/>}
				        label="Troca"
				      />

				</div>
				<TextField
			        label="Valor"
			        value={values.numberformat}
			        onChange={handleChange}
			        name="valor-produto"
			        id="valor-produto"
			        fullWidth={true}
			        InputProps={{
			          inputComponent: NumberFormatCustom,
			        }}
			      />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Enviar
        </Button>
			</form>
		</Container>
  	);

}
