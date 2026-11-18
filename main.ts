// News-image entry (Node 22, standard library only): the image is the
// entry.png beside this file, drawn for Wednesday 18 November 2026 — six
// stories (U.S.-Iran tankers, Kerch Bridge, Shenzhen summit, Gaza winter,
// COP31, DR Congo Ebola) plus a footer of the day's other headlines — and
// the program copies it to /output/entry.png. The gate takes a whole PNG
// or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. Deterministic: the same bytes every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
