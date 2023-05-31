import test from 'ava';
import { Once } from './src'

class Sum {

    private internal = 0

    @Once()
    add(x: number) {
        this.internal += x

        return this.internal
    }
}

test('@Once()', t => {
    const s = new Sum()

    t.is(s.add(15), 15)
    t.is(s.add(42), 15)
});
