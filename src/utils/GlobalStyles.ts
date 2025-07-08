import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	#slide-1:target ~ .pagination a[href="#slide-1"],
	#slide-2:target ~ .pagination a[href="#slide-2"],
	#slide-3:target ~ .pagination a[href="#slide-3"],
	#slide-4:target ~ .pagination a[href="#slide-4"],
	#slide-5:target ~ .pagination a[href="#slide-5"],
	#slide-6:target ~ .pagination a[href="#slide-6"],
	#slide-7:target ~ .pagination a[href="#slide-7"] {
		background: red;
	}
`;
