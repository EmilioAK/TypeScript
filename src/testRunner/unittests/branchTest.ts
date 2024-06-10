import * as performance from '../../compiler/performance.js';


describe('Branch 0 and 2 in clearMarks', () => {
  before(() => {
    performance.enable();
    performance.mark('testMark');
    performance.clearMarks();
  });

  it('should reach branch 0', () => {
    expect(performance.branch_coverage.get('clearMarks_0')).to.equal(true);
  });

  it('should reach branch 2', () => {
    expect(performance.branch_coverage.get('clearMarks_2')).to.equal(true);
  });


  after(() => {
    performance.disable();
  });
});

describe('Branch 0 and 1 in clearMarks', () => {
  before(() => {
    const markName = 'testMark';
    performance.enable();
    performance.mark(markName);
    performance.clearMarks(markName);
  });

  it('should reach branch 0', () => {
    expect(performance.branch_coverage.get('clearMarks_0')).to.equal(true);
  });

  it('should reach branch 1', () => {
    expect(performance.branch_coverage.get('clearMarks_1')).to.equal(true);
  });

  after(() => {
    performance.disable();
  });
});

describe('Branch 0 and not 1 in mark', () => {
  before(() => {
    performance.mark('marknName');
  });

  it('should reach branch 0', () => {
    expect(performance.branch_coverage.get('mark_0')).to.equal(true);
  });

  it('should not reach branch 1', () => {
    expect(performance.branch_coverage.get('mark_1')).not.to.equal(true);
  });
});

describe('Reaches both branches in mark', () => {
  before(() => {
    performance.enable();
    performance.mark('markName');
    performance.clearMarks();
    performance.disable();
  });

  it('should reach branch 0', () => {
    expect(performance.branch_coverage.get('mark_0')).to.equal(true);
  });

  it('should reach branch 1', () => {
    expect(performance.branch_coverage.get('mark_1')).to.equal(true);
  });
});
