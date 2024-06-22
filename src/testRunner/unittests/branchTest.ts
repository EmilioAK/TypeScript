import * as performance from '../../compiler/performance.js';


describe('Branch 1 in enable', () => { //It starts out disabled
  before(() => {
    performance.enable();
  })
  it('should reach branch 1', () => {
    expect(performance.branch_coverage.get('enable_1')).to.equal(true);
  });
  after(() => {
    performance.disable();
  })
});

describe('Branch 2 in enable', () => {
  before(() => {
    performance.enable();
    performance.enable();
  });

  it('should not reach branch 1', () => {
    expect(performance.branch_coverage.get('enable_1')).to.equal(false);
  });
  it('should reach branch 2', () => {
    expect(performance.branch_coverage.get('enable_2')).to.equal(true);
  });

  after(() => {
    performance.disable();
  });
});


describe('When disabled', () => {
  before(() => {
    performance.disable();
  });

  it('should not reach branch 1', () => {
    expect(performance.branch_coverage.get('disable_1')).to.equal(false);
  });
  it('should reach branch 2', () => {
    expect(performance.branch_coverage.get('disable_2')).to.equal(true);
  });
});

describe('When enabled', () => {
  before(() => {
    performance.enable();
    performance.disable();
  });

  it('should reach branch 1', () => {
    expect(performance.branch_coverage.get('disable_1')).to.equal(true);
  });
  it('should reach branch 2', () => {
    expect(performance.branch_coverage.get('disable_2')).to.equal(true);
  });
});